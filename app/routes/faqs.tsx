import { Header, Footer } from 'components';

export function meta() {
  return [
    { title: 'FAQs | Bridgeforth' },
    { name: 'description', content: 'Common questions about getting started, payments, confidentiality, and how Bridgeforth works.' },
    { rel: 'canonical', href: 'https://bridgeforthcg.com/faqs' },
    { property: 'og:title', content: 'FAQs | Bridgeforth' },
    { property: 'og:description', content: 'Common questions about getting started, payments, confidentiality, and how Bridgeforth works.' },
    { property: 'og:image', content: '/serviceimage.webp' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ];
}

const grouped = [
  {
    title: 'Getting started',
    items: [
      { q: 'How do I start?', a: 'Book a free 15-minute call or start the intake form.' },
      { q: 'Do you accept Medicaid?', a: 'We provide partner pathway referrals and navigation; direct Medicaid enrollment depends on payer and program.' },
    ],
  },
  {
    title: 'Payments & pricing',
    items: [
      { q: 'What are your rates?', a: 'See our Pricing page for plans. We offer sliding-scale on request.' },
      { q: 'Do you accept insurance?', a: 'We operate primarily private-pay and partner referral models.' },
    ],
  },
  {
    title: 'Confidentiality',
    items: [
      { q: 'Is my information secure?', a: 'We follow strict confidentiality practices and do not provide medical care — we coordinate services.' },
    ],
  },
];

export default function FAQs() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-semibold">Frequently asked questions</h1>

        <div className="mt-6 space-y-6">
          {grouped.map((g) => (
            <section key={g.title} className="bg-white p-6 rounded shadow">
              <h3 className="font-semibold">{g.title}</h3>
              <div className="mt-4 space-y-3">
                {g.items.map((it) => (
                  <div key={it.q}>
                    <h4 className="font-semibold">{it.q}</h4>
                    <p className="text-sm text-gray-600 mt-1">{it.a}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
