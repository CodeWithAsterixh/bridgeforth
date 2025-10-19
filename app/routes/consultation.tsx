import { Header, Footer } from '../../components';
import { useState } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';

export function meta() {
  return [{ title: 'Consultation - Bridgeforth' }];
}

const phoneRegex = /^\+?[0-9 ()-.]{7,20}$/;
const ConsultationSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  contact: z.union([
    z.email('Please enter a valid email address'),
    z.string().regex(phoneRegex, 'Please enter a valid phone number'),
  ]),
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
        const key = String(issue.path[0] ?? '');
        fieldErrors[key] = fieldErrors[key] || [];
        fieldErrors[key].push(issue.message);
      }
      return new Response(JSON.stringify({ ok: false, errors: fieldErrors }), { status: 400 });
    }

    const { name, contact, notes } = parsed.data;

    // Try to send email via nodemailer if SMTP env vars are set. Dynamically import nodemailer
    if (process.env.SMTP_HOST) {
      const nodemailer: any = await import('nodemailer');
      const transporter: any = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === 'true',
        auth: process.env.SMTP_USER
          ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
          : undefined,
      });

      const mail = {
        from: process.env.FROM_EMAIL || 'no-reply@bridgeforthcg.com',
        to: process.env.TO_EMAIL || 'info@bridgeforthcg.com',
        subject: `New consultation request from ${name}`,
        text: `Name: ${name}\nContact: ${contact}\n\nNotes:\n${notes || ''}`,
      };

      await transporter.sendMail(mail);
    } else {
      // No SMTP configured — log the payload so maintainers can handle it
      // eslint-disable-next-line no-console
      console.log('Consultation request (no SMTP configured):', { name, contact, notes });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error in consultation action', err);
    return new Response(JSON.stringify({ ok: false, message: 'Server error' }), { status: 500 });
  }
}

export default function Consultation() {
  const [form, setForm] = useState({ name: '', contact: '', notes: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErrors((err) => ({ ...err, [e.target.name]: '' }));
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
    const toastId = 'consultation';
    toast.loading('Sending request...', { id: toastId });
    try {
      const res = await fetch(window.location.pathname, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setForm({ name: '', contact: '', notes: '' });
        setErrors({});
        toast.success('Request sent — we will contact you to schedule a call.', { id: toastId });
        setLoading(false);
        return;
      }

      const payload = await res.json().catch(() => null);
      if (payload && payload.errors) {
        // Map server-side validation errors into UI
        const fieldErrors: Record<string, string> = {};
        for (const key of Object.keys(payload.errors)) {
          fieldErrors[key] = (payload.errors as Record<string, string[]>)[key]?.[0] || 'Invalid input';
        }
        setErrors(fieldErrors);
        toast.error('Please fix the errors and try again.', { id: toastId });
        setLoading(false);
        return;
      }

      toast.error('Unable to submit — please try again later.', { id: toastId });
      setLoading(false);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      toast.error('Server error — please try again later.', { id: toastId });
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-semibold text-[#1e3a8a]">Book a Free 15-Minute Consultation</h1>
        <p className="mt-2 text-gray-600">Schedule a short call to discuss your needs — we'll suggest next steps.</p>

        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
            <label className="block text-sm">Full name</label>
            <input disabled={loading} name="name" value={form.name} onChange={handleChange} className="w-full border rounded p-2 mt-1 disabled:opacity-30 disabled:pointer-events-none" />
            {errors.name && <div className="text-red-600 text-xs mt-1">{errors.name}</div>}

            <label className="block text-sm mt-3">Phone or email</label>
            <input disabled={loading} name="contact" value={form.contact} onChange={handleChange} className="w-full border rounded p-2 mt-1 disabled:opacity-30 disabled:pointer-events-none" />
            {errors.contact && <div className="text-red-600 text-xs mt-1">{errors.contact}</div>}

            <label className="block text-sm mt-3">Brief notes</label>
            <textarea disabled={loading} name="notes" value={form.notes} onChange={handleChange} className="w-full border rounded p-2 mt-1 disabled:opacity-30 disabled:pointer-events-none" rows={4} />
            {errors.notes && <div className="text-red-600 text-xs mt-1">{errors.notes}</div>}

            <div className="mt-4">
              <button type="submit" disabled={loading} className="bg-[#2563eb] text-white px-4 py-2 rounded flex items-center gap-2 disabled:opacity-30 disabled:pointer-events-none">
                {loading ? <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="white" strokeWidth="4" fill="none" strokeOpacity="0.25"/></svg> : null}
                <span>{loading ? 'Sending...' : 'Request Consultation'}</span>
              </button>
            </div>
          </form>

          <div className="bg-gray-50 p-6 rounded">
            <h3 className="font-semibold">What to expect</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#2563eb] text-white flex items-center justify-center">1</div>
                <div>
                  <h4 className="font-semibold">Quick discovery</h4>
                  <p className="text-sm text-gray-600">A 15-minute call to understand your priorities and urgency.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#2563eb] text-white flex items-center justify-center">2</div>
                <div>
                  <h4 className="font-semibold">Clear plan</h4>
                  <p className="text-sm text-gray-600">We recommend immediate next steps and potential costs.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#2563eb] text-white flex items-center justify-center">3</div>
                <div>
                  <h4 className="font-semibold">Coordination</h4>
                  <p className="text-sm text-gray-600">If you proceed, we coordinate with providers and agencies on your behalf.</p>
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
