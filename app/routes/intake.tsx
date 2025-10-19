import { Header, Footer } from '~/components';
import { useState } from 'react';
import { z } from 'zod';
import { toast } from 'sonner';

export function meta() {
  return [
    { title: 'Start Intake | Bridgeforth' },
    { name: 'description', content: 'Begin your intake with Bridgeforth — provide basic details and we will follow up to collect required consents and next steps.' },
    { rel: 'canonical', href: 'https://bridgeforthcg.com/intake' },
    { property: 'og:title', content: 'Start Intake | Bridgeforth' },
    { property: 'og:description', content: 'Begin your intake with Bridgeforth — provide basic details and we will follow up to collect required consents and next steps.' },
    { property: 'og:image', content: '/hero-background.avif' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ];
}

const IntakeSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  phoneOrEmail: z.union([
    z.string().email('Please enter a valid email'),
    z.string().min(7, 'Please enter a phone number'),
  ]),
  payerType: z.enum(['private', 'medicaid', 'other']).optional(),
  location: z.string().optional(),
  needs: z.string().max(2000).optional(),
  consent: z.literal('on'),
});

export async function action({ request }: { request: Request }) {
  try {
    const payload = await request.json();
    const parsed = IntakeSchema.safeParse(payload);
    if (!parsed.success) {
      const fieldErrors: Record<string, string[]> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? '');
        fieldErrors[key] = fieldErrors[key] || [];
        fieldErrors[key].push(issue.message);
      }
      return new Response(JSON.stringify({ ok: false, errors: fieldErrors }), { status: 400 });
    }

    const { fullName, phoneOrEmail, payerType, location, needs } = parsed.data;

    const subject = `New intake from ${fullName}`;
    const text = `Name: ${fullName}\nContact: ${phoneOrEmail}\nPayer: ${payerType}\nLocation: ${location}\n\nNeeds:\n${needs || ''}`;
    const resMail = await import('../../lib/sendMail').then((m) => m.sendMail({ subject, text }));
    if (!resMail.ok) {
      return new Response(JSON.stringify({ ok: false, message: 'Failed to send email' }), { status: 500 });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error in intake action', err);
    return new Response(JSON.stringify({ ok: false, message: 'Server error' }), { status: 500 });
  }
}

export default function Intake() {
  const [form, setForm] = useState({ fullName: '', phoneOrEmail: '', payerType: 'private', location: '', needs: '', consent: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErrors((err) => ({ ...err, [e.target.name]: '' }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = IntakeSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as string;
        fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    const toastId = 'intake';
    toast.loading('Submitting intake...', { id: toastId });
    try {
      const res = await fetch(window.location.pathname, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setForm({ fullName: '', phoneOrEmail: '', payerType: 'private', location: '', needs: '', consent: '' });
        setErrors({});
        toast.success('Intake received — we will follow up shortly.', { id: toastId });
        setLoading(false);
        return;
      }

      const payload = await res.json().catch(() => null);
      if (payload && payload.errors) {
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
        <h1 className="text-2xl font-semibold text-[#1e3a8a]">Start Intake</h1>
        <p className="mt-2 text-gray-600">Please provide basic information to help us understand your needs. We will follow up to collect any required consents.</p>

        <form onSubmit={handleSubmit} className="mt-6 bg-white p-6 rounded shadow">
          <label className="block text-sm">Full name</label>
          <input name="fullName" value={form.fullName} onChange={handleChange} disabled={loading} className="w-full border rounded p-2 mt-1 disabled:opacity-30" />
          {errors.fullName && <div className="text-red-600 text-xs mt-1">{errors.fullName}</div>}

          <label className="block text-sm mt-3">Phone or email</label>
          <input name="phoneOrEmail" value={form.phoneOrEmail} onChange={handleChange} disabled={loading} className="w-full border rounded p-2 mt-1 disabled:opacity-30" />
          {errors.phoneOrEmail && <div className="text-red-600 text-xs mt-1">{errors.phoneOrEmail}</div>}

          <label className="block text-sm mt-3">Payer type</label>
          <select name="payerType" value={form.payerType} onChange={handleChange} disabled={loading} className="w-full border rounded p-2 mt-1">
            <option value="private">Private pay</option>
            <option value="medicaid">Medicaid</option>
            <option value="other">Other</option>
          </select>

          <label className="block text-sm mt-3">Location (city, county)</label>
          <input name="location" value={form.location} onChange={handleChange} disabled={loading} className="w-full border rounded p-2 mt-1" />

          <label className="block text-sm mt-3">Brief needs summary</label>
          <textarea name="needs" value={form.needs} onChange={handleChange} disabled={loading} className="w-full border rounded p-2 mt-1" rows={5} />

          <label className="mt-3 flex items-center gap-2 text-sm">
            <input type="checkbox" name="consent" checked={form.consent === 'on'} onChange={(e) => setForm((s) => ({ ...s, consent: e.target.checked ? 'on' : '' }))} disabled={loading} />
            I agree to be contacted about services and consent to share necessary details.
          </label>
          {errors.consent && <div className="text-red-600 text-xs mt-1">{errors.consent}</div>}

          <div className="mt-4">
            <button type="submit" disabled={loading} className="bg-[#2563eb] text-white px-4 py-2 rounded flex items-center gap-2 disabled:opacity-30">
              {loading ? <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="white" strokeWidth="4" fill="none" strokeOpacity="0.25"/></svg> : null}
              <span>{loading ? 'Submitting...' : 'Submit intake'}</span>
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}
