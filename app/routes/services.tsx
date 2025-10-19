import { Header, Footer, CTABand } from '../../components';
import { Link } from 'react-router';

export function meta() {
  return [
    { title: 'Services - Bridgeforth' },
    { name: 'description', content: 'Private case management and partner referral services — see Private Pay and Medicaid Partner Pathway.' },
    { property: 'og:title', content: 'Services | Bridgeforth' },
    { property: 'og:description', content: 'Private case management and partner referral services — see Private Pay and Medicaid Partner Pathway.' },
    { property: 'og:type', content: 'website' },
  ];
}

export default function Services() {
  const services = [
    { href: '/services/private-pay', title: 'Private Pay', desc: 'For families paying privately — coordination and oversight.' },
    { href: '/services/medicaid-partner', title: 'Medicaid Partner Pathway', desc: 'Referral pathway for agencies and partners.' },
  ];

  return (
    <>
      <Header />

      <section className="relative">
        <div className="h-[36vh] min-h-[220px] relative">
          <img loading="lazy" src="/images/serviceimage.webp" alt="Services" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-4xl font-semibold">Services that reduce burden and improve outcomes</h1>
              <p className="mt-2 max-w-2xl mx-auto">We provide private case management and a Medicaid partner pathway for agencies. Below are our primary services and what families can expect.</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-12">

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <Link key={s.href} to={s.href} className="block bg-white border rounded shadow p-6 hover:shadow-lg transition">
                <h3 className="font-semibold text-xl">{s.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
                <ul className="mt-4 text-sm text-gray-700 list-disc list-inside">
                  <li>Clear, outcome-focused plans</li>
                  <li>Coordination with providers and agencies</li>
                  <li>Regular updates and transparent billing</li>
                </ul>
                <div className="mt-4">
                  <button className="bg-[#2563eb] text-white px-4 py-2 rounded">Learn more</button>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-semibold">Featured outcomes</h3>
            <p className="text-sm text-gray-600 mt-2">Real examples of how we helped families and agencies.</p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded">
                <strong>Saved time</strong>
                <p className="text-sm text-gray-600">We reduced paperwork time by an average of 6 hours/week for caregivers.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <strong>Faster placements</strong>
                <p className="text-sm text-gray-600">We helped secure a long-term care transition within 2 weeks for high-priority cases.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <strong>Partner referrals</strong>
                <p className="text-sm text-gray-600">Agencies report clearer handoffs and fewer missed follow-ups.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
      <Footer />
    </>
  );
}
