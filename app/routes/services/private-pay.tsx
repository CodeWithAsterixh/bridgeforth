import { Header, Footer, CTABand } from '../../../components';

export function meta() {
  return [
    { title: 'Private Pay Services - Bridgeforth' },
    { name: 'description', content: 'Personalized private-pay case management: waiver navigation, placement, home-based supports, and monthly oversight.' },
  ];
}

export default function PrivatePay() {
  return (
    <>
      <Header />

      <section>
        <div className="h-[36vh] min-h-[220px] relative">
          <img src="/images/privatepaycasemgt.avif" alt="Private Pay" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-3xl font-semibold">Private Pay Case Management</h1>
              <p className="mt-2 max-w-2xl mx-auto">Personalized case management for families paying privately. We reduce your workload and coordinate services so you don’t have to.</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-12 min-h-[500px]">
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-semibold">Medicaid & Waiver Navigation</h3>
              <p className="text-sm text-gray-600 mt-2">Eligibility, applications, and compliance support to secure benefits and maintain services.</p>
              <ul className="mt-3 text-sm list-disc list-inside text-gray-700">
                <li>Faster approvals and fewer missed deadlines</li>
                <li>Clear next steps for families</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-semibold">Placement & Transitions</h3>
              <p className="text-sm text-gray-600 mt-2">Support with long-term care placement, discharge planning, and safe transitions back home.</p>
              <ul className="mt-3 text-sm list-disc list-inside text-gray-700">
                <li>Coordinated move-in and care team setup</li>
                <li>Reduced readmissions and smoother transitions</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-semibold">Home-Based Supports Coordination</h3>
              <p className="text-sm text-gray-600 mt-2">Organizing caregivers, home supports, and monitoring outcomes for continuity of care.</p>
              <ul className="mt-3 text-sm list-disc list-inside text-gray-700">
                <li>Reliable scheduling and oversight</li>
                <li>Caregiver communication and escalation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-semibold">Benefits & Paperwork Management</h3>
              <p className="text-sm text-gray-600 mt-2">We manage forms, appeals, and billing coordination so families don't get bogged down in paperwork.</p>
              <ul className="mt-3 text-sm list-disc list-inside text-gray-700">
                <li>Document prep and submission support</li>
                <li>Follow-up on authorizations and appeals</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-semibold">Care Team Advocacy</h3>
              <p className="text-sm text-gray-600 mt-2">We attend care meetings, advocate for needs, and keep everyone aligned with the plan.</p>
              <ul className="mt-3 text-sm list-disc list-inside text-gray-700">
                <li>Clear agenda and action items for meetings</li>
                <li>Communication with providers and families</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-semibold">Monthly Care Oversight</h3>
              <p className="text-sm text-gray-600 mt-2">Ongoing monitoring, monthly summaries, and adjustments to keep the plan on track.</p>
              <ul className="mt-3 text-sm list-disc list-inside text-gray-700">
                <li>Monthly status updates and recommendations</li>
                <li>Outcome-focused reporting</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-semibold">Client outcomes</h4>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-lg shadow flex flex-col items-start">
                <div className="bg-indigo-600 text-white w-12 h-12 flex items-center justify-center rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3v4h6v-4c0-1.657-1.343-3-3-3z" />
                  </svg>
                </div>
                <h5 className="mt-4 font-semibold">Clear oversight</h5>
                <p className="mt-2 text-sm text-gray-600">Monthly care summaries and simple dashboards make tracking progress effortless.</p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow flex flex-col items-start">
                <div className="bg-emerald-600 text-white w-12 h-12 flex items-center justify-center rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
                  </svg>
                </div>
                <h5 className="mt-4 font-semibold">Faster access</h5>
                <p className="mt-2 text-sm text-gray-600">We remove delays by proactively managing referrals and service authorizations.</p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow flex flex-col items-start">
                <div className="bg-sky-600 text-white w-12 h-12 flex items-center justify-center rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h5 className="mt-4 font-semibold">Less admin burden</h5>
                <p className="mt-2 text-sm text-gray-600">We handle paperwork, billing coordination, and scheduling so caregivers can focus on care.</p>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a href="/pricing" className="bg-white border border-gray-200 px-4 py-2 rounded">See pricing</a>
              <a href="/intake" className="bg-blue-600 text-white px-4 py-2 rounded">Start intake</a>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
      <Footer />
    </>
  );
}
