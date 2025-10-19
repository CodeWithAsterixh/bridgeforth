import { Header, Hero, ReasonsSection, Footer, TrustBar, ValuePillars, ProcessSteps, CTABand, ButtonUI, FeatureGrid } from '../components';
import TestimonialSlider from '../components/TestimonialSlider';

const SERVICES = [
  {
    title: 'Medicaid & Waiver Navigation',
    icon: '🧭',
    outcomes: [
      'Faster approvals and fewer missed deadlines',
      'Clear next steps for families',
      'Assistance with applications and renewals',
    ],
    href: '/services/private-pay',
  },
  {
    title: 'Placement & Transitions',
    icon: '🏠',
    outcomes: [
      'Coordinated move-in and care team setup',
      'Reduced readmissions and smoother transitions',
      'Discharge planning support',
    ],
    href: '/services/private-pay',
  },
  {
    title: 'Home-Based Supports Coordination',
    icon: '🧑‍⚕️',
    outcomes: [
      'Reliable scheduling and oversight',
      'Caregiver communication and escalation',
      'Continuity of care across providers',
    ],
    href: '/services/private-pay',
  },
  {
    title: 'Benefits & Paperwork Management',
    icon: '📄',
    outcomes: [
      'Document prep and submission support',
      'Follow-up on authorizations and appeals',
      'Coordination with payers and providers',
    ],
    href: '/services/private-pay',
  },
];

export function Welcome() {
  return (
    <>
      <Header />
      <Hero />
      <TrustBar />
      <ValuePillars />
      <FeatureGrid />
      <ProcessSteps />
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold">Our services</h2>
        <p className="text-gray-600 mt-2">Outcome-focused services to reduce burden and improve access to care.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <div key={s.title} className="bg-white p-6 rounded shadow">
              <div className="text-4xl">{s.icon}</div>
              <h3 className="mt-3 font-semibold">{s.title}</h3>
              <ul className="mt-3 text-sm list-disc list-inside text-gray-700">
                {s.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
              <div className="mt-4">
                <ButtonUI as="a" href={s.href} variant="secondary">Learn more</ButtonUI>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 p-6 rounded">
          <h3 className="text-xl font-semibold">Private Pay vs Medicaid Partner</h3>
          <p className="text-sm text-gray-600 mt-2">A quick comparison of how our Private Pay services differ from the Medicaid Partner Pathway.</p>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-3 bg-white"></th>
                  <th className="p-3 bg-white">Private Pay</th>
                  <th className="p-3 bg-white">Medicaid Partner</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-semibold">Who it's for</td>
                  <td className="p-3">Families paying privately who want personalized ongoing coordination.</td>
                  <td className="p-3">Agencies and providers referring clients who need intake and coordination.</td>
                </tr>
                <tr className="border-t bg-white">
                  <td className="p-3 font-semibold">Scope</td>
                  <td className="p-3">Monthly oversight, advocacy, waiver navigation, placement support.</td>
                  <td className="p-3">Fast referral intake, triage, consent collection, and updates to referring agencies.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-semibold">Billing</td>
                  <td className="p-3">Private pay or sliding-scale arrangements.</td>
                  <td className="p-3">Partner-driven arrangements and agency contracts.</td>
                </tr>
                <tr className="border-t bg-white">
                  <td className="p-3 font-semibold">Primary CTA</td>
                  <td className="p-3"><ButtonUI as="a" href="/intake" variant="primary">Start Intake</ButtonUI></td>
                  <td className="p-3"><ButtonUI as="a" href="/partners/referral" variant="primary">Send a referral</ButtonUI></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="w-full mx-auto px-6">
        <TestimonialSlider autoplay pauseOnHover items={[{ quote: 'Bridgeforth saved our family weeks of paperwork.', name: 'A. Smith', city: 'Atlanta' }, { quote: 'Clear guidance and steady follow-up.', name: 'J. Lee', city: 'McDonough' }]} />
      </div>
      <CTABand />
      <ReasonsSection />
      <Footer />
    </>
  );
}
