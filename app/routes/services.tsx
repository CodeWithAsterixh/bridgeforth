import { Header, Footer, CTABand } from '../components';
import { Link } from 'react-router';

export function meta() {
  return [
    { title: 'Services | Bridgeforth' },
    { name: 'description', content: 'Private case management and partner referral services — explore Private Pay and the Medicaid Partner Pathway.' },
    { rel: 'canonical', href: 'https://bridgeforthcg.com/services' },
    { property: 'og:title', content: 'Services | Bridgeforth' },
    { property: 'og:description', content: 'Private case management and partner referral services — explore Private Pay and the Medicaid Partner Pathway.' },
    { property: 'og:image', content: '/og/services-1200x630.svg' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
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
        <div className="h-[40vh] sm:h-[48vh] md:h-[50vh] relative">
          <img
            loading="lazy"
            src="/images/serviceimage.webp"
            alt="Services"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/30"></div>
          <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Services that reduce burden and improve outcomes
              </h1>
              <p className="mt-3 text-sm sm:text-base md:text-lg text-white/90">
                We provide private case management and a Medicaid partner pathway for agencies. Below are our primary services and what families can expect.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="block bg-white border rounded-lg shadow-md p-6 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-semibold text-xl md:text-2xl">{s.title}</h3>
                <p className="text-gray-700 mt-2">{s.desc}</p>
                <ul className="mt-4 text-gray-700 text-sm list-disc list-inside space-y-1">
                  <li>Clear, outcome-focused plans</li>
                  <li>Coordination with providers and agencies</li>
                  <li>Regular updates and transparent billing</li>
                </ul>
                <div className="mt-4">
                  <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-md hover:brightness-110 transition">
                    Learn more
                  </button>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Featured outcomes</h3>
            <p className="text-gray-600 mt-2">Real examples of how we helped families and agencies.</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-lg shadow-sm hover:shadow-md transition">
                <strong className="block text-gray-800">Saved time</strong>
                <p className="text-gray-600 text-sm mt-1">
                  We reduced paperwork time by an average of 6 hours/week for caregivers.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-white p-5 rounded-lg shadow-sm hover:shadow-md transition">
                <strong className="block text-gray-800">Faster placements</strong>
                <p className="text-gray-600 text-sm mt-1">
                  We helped secure a long-term care transition within 2 weeks for high-priority cases.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white p-5 rounded-lg shadow-sm hover:shadow-md transition">
                <strong className="block text-gray-800">Partner referrals</strong>
                <p className="text-gray-600 text-sm mt-1">
                  Agencies report clearer handoffs and fewer missed follow-ups.
                </p>
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
