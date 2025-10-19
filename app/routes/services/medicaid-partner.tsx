import { Header, Footer, CTABand } from '../../../components';

export function meta() {
  return [
    { title: 'Medicaid Partner Pathway - Bridgeforth' },
    { name: 'description', content: 'A streamlined referral and coordination pathway for agencies; partner with Bridgeforth for timely intake and updates.' },
  ];
}

export default function MedicaidPartner() {
  return (
    <>
      <Header />

      <section>
        <div className="h-[36vh] min-h-[220px] relative">
          <img loading="lazy" src="/images/MedicaidPartnerPathway.avif" alt="Medicaid Partner Pathway" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-3xl font-semibold">Medicaid Partner Pathway</h1>
              <p className="mt-2 max-w-2xl mx-auto">A streamlined referral and coordination pathway for agencies. We partner with providers to ensure timely intake and clear communication back to referring teams.</p>
              <div className="mt-4 flex items-center justify-center gap-3">
                <a href="/partners/referral" className="bg-white text-blue-700 px-4 py-2 rounded shadow">Send a referral</a>
                <a href="/Partner-Pitch-Sheet.pdf" download className="bg-blue-600 text-white px-4 py-2 rounded shadow">Download pitch sheet</a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-12 min-h-[500px]">
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow">
              <h4 className="font-semibold">Referral intake</h4>
              <p className="text-sm text-gray-600 mt-2">Fast triage and consent collection so clients move quickly into assessment.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="font-semibold">Coordination updates</h4>
              <p className="text-sm text-gray-600 mt-2">We provide regular updates to referring agencies and close the loop on outcomes.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="font-semibold">Partner resources</h4>
              <p className="text-sm text-gray-600 mt-2">Downloadable pitch sheet and quick-reference materials for partners.</p>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-semibold">How it works</h4>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 *:h-full gap-6 items-start">
              <div className="relative px-6 py-10 bg-white rounded-lg shadow">
                <div className="absolute top-2 left-6 bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h5 className="mt-6 font-semibold">Referral intake</h5>
                <p className="mt-2 text-sm text-gray-600">Referrals come to our centralized intake. We triage urgency, collect consent, and schedule assessments fast.</p>
              </div>

              <div className="relative px-6 py-10 bg-white rounded-lg shadow">
                <div className="absolute top-2 left-6 bg-emerald-600 text-white w-12 h-12 flex items-center justify-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
                  </svg>
                </div>
                <h5 className="mt-6 font-semibold">Assessment & plan</h5>
                <p className="mt-2 text-sm text-gray-600">Our clinicians assess needs and produce a practical care plan with clear next steps and timelines.</p>
              </div>

              <div className="relative px-6 py-10 bg-white rounded-lg shadow">
                <div className="absolute top-2 left-6 bg-sky-600 text-white w-12 h-12 flex items-center justify-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17l4-4 4 4" />
                  </svg>
                </div>
                <h5 className="mt-6 font-semibold">Coordination & updates</h5>
                <p className="mt-2 text-sm text-gray-600">We coordinate services, share progress with referring agencies, and ensure outcomes are documented and closed.</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center md:justify-start">
              <div className="w-full md:w-2/3 h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent rounded-full" />
            </div>
          </div>
        </div>
      </section>

      <CTABand />
      <Footer />
    </>
  );
}
