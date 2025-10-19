import { Header, Footer } from '../../components';
import { useState } from 'react';
import { z } from 'zod';
import { toast } from 'sonner';

export function meta() {
  return [
    { title: 'Partner Referral | Bridgeforth' },
    { name: 'description', content: 'Refer a client from your agency to Bridgeforth using our secure referral form. Please ensure you have client consent before submitting.' },
    { rel: 'canonical', href: 'https://bridgeforthcg.com/partners/referral' },
    { property: 'og:title', content: 'Partner Referral | Bridgeforth' },
    { property: 'og:description', content: 'Refer a client from your agency to Bridgeforth using our secure referral form. Please ensure you have client consent before submitting.' },
    { property: 'og:image', content: '/MedicaidPartnerPathway.avif' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ];
}

const phoneRegex = /^\+?[0-9 ()-.]{7,20}$/;
const ReferralSchema = z.object({
  agencyName: z.string().min(2, 'Please enter the agency name'),
  referrerName: z.string().min(2, 'Please enter your name'),
  clientName: z.string().min(2, 'Please enter the client name'),
  contact: z.union([
    z.string().email('Please enter a valid email address'),
    z.string().regex(phoneRegex, 'Please enter a valid phone number'),
  ]),
  urgency: z.enum(['low', 'medium', 'high']).optional(),
  notes: z.string().max(2000).optional(),
  consent: z.literal('on'),
});

export async function action({ request }: { request: Request }) {
  try {
    const payload = await request.json();
    const parsed = ReferralSchema.safeParse(payload);
    if (!parsed.success) {
      const fieldErrors: Record<string, string[]> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? '');
        fieldErrors[key] = fieldErrors[key] || [];
        fieldErrors[key].push(issue.message);
      }
      return new Response(JSON.stringify({ ok: false, errors: fieldErrors }), { status: 400 });
    }

    const { agencyName, referrerName, clientName, contact, urgency, notes } = parsed.data;

    const subject = `Partner referral from ${referrerName} (${agencyName})`;
    const text = `Agency: ${agencyName}\nReferrer: ${referrerName}\nClient: ${clientName}\nContact: ${contact}\nUrgency: ${urgency || 'not specified'}\n\nNotes:\n${notes || ''}`;
    const resMail = await import('../../../lib/sendMail').then((m) => m.sendMail({ subject, text }));
    if (!resMail.ok) {
      return new Response(JSON.stringify({ ok: false, message: 'Failed to send email' }), { status: 500 });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error in referral action', err);
    return new Response(JSON.stringify({ ok: false, message: 'Server error' }), { status: 500 });
  }
}

export default function PartnerReferral() {
  const [form, setForm] = useState({ agencyName: '', referrerName: '', clientName: '', contact: '', urgency: 'medium', notes: '', consent: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErrors((err) => ({ ...err, [e.target.name]: '' }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const result = ReferralSchema.safeParse(form);
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
    const toastId = 'partner-referral';
    toast.loading('Sending referral...', { id: toastId });
    try {
      if(typeof window === 'undefined') {
      toast.error('Unable to submit — please try again later.', { id: toastId });
      return;
    };
      const res = await fetch(window.location.pathname, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setForm({ agencyName: '', referrerName: '', clientName: '', contact: '', urgency: 'medium', notes: '', consent: '' });
        setErrors({});
        toast.success('Referral sent — we will follow up with your agency.', { id: toastId });
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
        <h1 className="text-2xl font-semibold text-[#1e3a8a]">Partner Referral</h1>
        <p className="mt-2 text-gray-600">Use this form to refer a client from your agency. Do not include protected health information unless you have client consent.</p>

        <form onSubmit={handleSubmit} className="mt-6 bg-white p-6 rounded shadow">
          <label className="block text-sm">Agency name</label>
          <input name="agencyName" value={form.agencyName} onChange={handleChange} disabled={loading} className="w-full border rounded p-2 mt-1 disabled:opacity-30" />
          {errors.agencyName && <div className="text-red-600 text-xs mt-1">{errors.agencyName}</div>}

          <label className="block text-sm mt-3">Your name</label>
          <input name="referrerName" value={form.referrerName} onChange={handleChange} disabled={loading} className="w-full border rounded p-2 mt-1 disabled:opacity-30" />
          {errors.referrerName && <div className="text-red-600 text-xs mt-1">{errors.referrerName}</div>}

          <label className="block text-sm mt-3">Client name</label>
          <input name="clientName" value={form.clientName} onChange={handleChange} disabled={loading} className="w-full border rounded p-2 mt-1 disabled:opacity-30" />
          {errors.clientName && <div className="text-red-600 text-xs mt-1">{errors.clientName}</div>}

          <label className="block text-sm mt-3">Contact (phone or email)</label>
          <input name="contact" value={form.contact} onChange={handleChange} disabled={loading} className="w-full border rounded p-2 mt-1 disabled:opacity-30" />
          {errors.contact && <div className="text-red-600 text-xs mt-1">{errors.contact}</div>}

          <label className="block text-sm mt-3">Urgency</label>
          <select name="urgency" value={form.urgency} onChange={handleChange} disabled={loading} className="w-full border rounded p-2 mt-1">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <label className="block text-sm mt-3">Notes</label>
          <textarea name="notes" value={form.notes} onChange={handleChange} disabled={loading} className="w-full border rounded p-2 mt-1" rows={4} />
          {errors.notes && <div className="text-red-600 text-xs mt-1">{errors.notes}</div>}

          <label className="mt-3 flex items-center gap-2 text-sm">
            <input type="checkbox" name="consent" checked={form.consent === 'on'} onChange={(e) => setForm((s) => ({ ...s, consent: e.target.checked ? 'on' : '' }))} disabled={loading} />
            I confirm I have client consent to share this information.
          </label>
          {errors.consent && <div className="text-red-600 text-xs mt-1">{errors.consent}</div>}

          <div className="mt-4">
            <button type="submit" disabled={loading} className="bg-[#2563eb] text-white px-4 py-2 rounded flex items-center gap-2 disabled:opacity-30">
              {loading ? <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="white" strokeWidth="4" fill="none" strokeOpacity="0.25"/></svg> : null}
              <span>{loading ? 'Sending...' : 'Send Referral'}</span>
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}
