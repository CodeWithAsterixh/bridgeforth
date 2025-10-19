import { Header, Footer } from "../components";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { sendMail } from "../../lib/sendMail";

export function meta() {
  return [
    { title: "Book a Free 15-Minute Consultation | Bridgeforth" },
    {
      name: "description",
      content:
        "Book a free 15-minute consultation with Bridgeforth to discuss care coordination and next steps.",
    },
    { rel: "canonical", href: "https://bridgeforthcg.com/consultation" },
    {
      property: "og:title",
      content: "Book a Free 15-Minute Consultation | Bridgeforth",
    },
    {
      property: "og:description",
      content:
        "Book a free 15-minute consultation with Bridgeforth to discuss care coordination and next steps.",
    },
    { property: "og:image", content: "/og/consultation-1200x630.svg" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}

const phoneRegex = /^\+?[0-9 ()-.]{7,20}$/;
const ConsultationSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  contact: z.union([
    z.email("Please enter a valid email address"),
    z.string().regex(phoneRegex, "Please enter a valid phone number"),
  ]),
  business: z.string().optional(),
  role: z.string().optional(),
  notes: z.string().max(1000).optional(),
});

// Server action: handle POST from the client and send an email (server-side)
export async function action({ request }: { request: Request }) {
  try {
    const payload = await request.json();
    const parsed = ConsultationSchema.safeParse(payload);
    if (!parsed.success) {
      const fieldErrors: Record<string, string[]> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "");
        fieldErrors[key] = fieldErrors[key] || [];
        fieldErrors[key].push(issue.message);
      }
      return new Response(JSON.stringify({ ok: false, errors: fieldErrors }), {
        status: 400,
      });
    }

    const { name, contact, business, role, notes } = parsed.data;
    const subject = `Consultation request from ${name}`;
    const text = `Name: ${name}\nContact: ${contact}\nBusiness: ${
      business || ""
    }\nRole: ${role || ""}\n\nNotes:\n${notes || ""}`;
    const resMail = await sendMail({ subject, text });
    if (!resMail.ok) {
      return new Response(
        JSON.stringify({ ok: false, message: "Failed to send email" }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Error in consultation action", err);
    return new Response(
      JSON.stringify({ ok: false, message: "Server error" }),
      { status: 500 }
    );
  }
}

export default function Consultation() {
  const [form, setForm] = useState({ name: "", contact: "", notes: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErrors((err) => ({ ...err, [e.target.name]: "" }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Client-side validation first
    const result = ConsultationSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as string;
        fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    // Send to server action
    setLoading(true);
    const toastId = "consultation";
    toast.loading("Sending request...", { id: toastId });
    try {
      if (typeof window === "undefined") {
        toast.error("Unable to submit — please try again later.", {
          id: toastId,
        });
        return;
      }

      const res = await fetch(window.location.pathname, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setForm({ name: "", contact: "", notes: "" });
        setErrors({});
        toast.success(
          "Request sent — we will contact you to schedule a call.",
          { id: toastId }
        );
        setLoading(false);
        return;
      }

      const payload = await res.json().catch(() => null);
      if (payload && payload.errors) {
        // Map server-side validation errors into UI
        const fieldErrors: Record<string, string> = {};
        for (const key of Object.keys(payload.errors)) {
          fieldErrors[key] =
            (payload.errors as Record<string, string[]>)[key]?.[0] ||
            "Invalid input";
        }
        setErrors(fieldErrors);
        toast.error("Please fix the errors and try again.", { id: toastId });
        setLoading(false);
        return;
      }

      toast.error("Unable to submit — please try again later.", {
        id: toastId,
      });
      setLoading(false);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      toast.error("Server error — please try again later.", { id: toastId });
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-semibold text-[#1e3a8a]">
          Book a Free 15-Minute Consultation
        </h1>
        <p className="mt-2 text-gray-600">
          Schedule a short call to discuss your needs — we'll suggest next
          steps.
        </p>

        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
            <label className="block text-sm">Full name</label>
            <input
              disabled={loading}
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded p-2 mt-1 disabled:opacity-30 disabled:pointer-events-none"
            />
            {errors.name && (
              <div className="text-red-600 text-xs mt-1">{errors.name}</div>
            )}

            <label className="block text-sm mt-3">Phone or email</label>
            <input
              disabled={loading}
              name="contact"
              value={form.contact}
              onChange={handleChange}
              className="w-full border rounded p-2 mt-1 disabled:opacity-30 disabled:pointer-events-none"
            />
            {errors.contact && (
              <div className="text-red-600 text-xs mt-1">{errors.contact}</div>
            )}

            <label className="block text-sm mt-3">
              Business / Agency (optional)
            </label>
            <input
              disabled={loading}
              name="business"
              value={(form as any).business || ""}
              onChange={handleChange}
              className="w-full border rounded p-2 mt-1 disabled:opacity-30 disabled:pointer-events-none"
            />

            <label className="block text-sm mt-3">Your role (optional)</label>
            <input
              disabled={loading}
              name="role"
              value={(form as any).role || ""}
              onChange={handleChange}
              className="w-full border rounded p-2 mt-1 disabled:opacity-30 disabled:pointer-events-none"
            />

            <label className="block text-sm mt-3">Brief notes</label>
            <textarea
              disabled={loading}
              name="notes"
              value={form.notes}
              onChange={handleChange}
              className="w-full border rounded p-2 mt-1 disabled:opacity-30 disabled:pointer-events-none"
              rows={4}
            />
            {errors.notes && (
              <div className="text-red-600 text-xs mt-1">{errors.notes}</div>
            )}

            <div className="mt-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#2563eb] text-white px-4 py-2 rounded flex items-center gap-2 disabled:opacity-30 disabled:pointer-events-none"
              >
                {loading ? (
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="white"
                      strokeWidth="4"
                      fill="none"
                      strokeOpacity="0.25"
                    />
                  </svg>
                ) : null}
                <span>{loading ? "Sending..." : "Request Consultation"}</span>
              </button>
            </div>
          </form>
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-semibold">Schedule a call</h3>
            <p className="text-sm text-gray-600 mt-2">
              Use our embedded scheduler below, or use the quick request form if
              you prefer.
            </p>

            <div className="mt-4">
              <div className="hidden md:block">
                <iframe
                  src="https://calendly.com/your-calendly/15-min"
                  title="Book a 15-minute call"
                  className="w-full h-96 border-0"
                />
              </div>

              <div className="md:hidden mt-4">
                <div className="bg-white p-4 rounded shadow">
                  <h4 className="font-semibold">Quick request</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    We'll email you to confirm a time.
                  </p>
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const el = e.target as HTMLFormElement;
                      const formData = new FormData(el);
                      const payload: any = Object.fromEntries(formData as any);
                      if (!payload.name || !payload.contact) {
                        toast.error("Please provide name and contact");
                        return;
                      }
                      toast.loading("Sending request...", {
                        id: "quick-request",
                      });
                      try {
                        if (typeof window === "undefined") {
                          toast.error(
                            "Unable to submit — please try again later.",
                          );
                          return;
                        }
                        const res = await fetch(window.location.pathname, {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(payload),
                        });
                        if (res.ok) {
                          toast.success("Request sent — we will contact you");
                          el.reset();
                          return;
                        }
                        toast.error("Unable to send request");
                      } catch (err) {
                        // eslint-disable-next-line no-console
                        console.error(err);
                        toast.error("Server error");
                      }
                    }}
                  >
                    <label className="block text-sm">Name</label>
                    <input
                      name="name"
                      className="w-full border rounded p-2 mt-1"
                    />
                    <label className="block text-sm mt-2">Phone or email</label>
                    <input
                      name="contact"
                      className="w-full border rounded p-2 mt-1"
                    />
                    <div className="mt-3">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded">
                        Send request
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
