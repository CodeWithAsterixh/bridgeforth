import { motion } from "motion/react";
import {
  Header,
  Hero,
  ReasonsSection,
  Footer,
  TrustBar,
  ValuePillars,
  ProcessSteps,
  CTABand,
  ButtonUI,
  FeatureGrid,
} from "../components";
import TestimonialSlider from "../components/TestimonialSlider";
const SERVICES = [
  {
    title: "Medicaid & Waiver Navigation",
    icon: "🧭",
    outcomes: [
      "Faster approvals and fewer missed deadlines",
      "Clear next steps for families",
      "Assistance with applications and renewals",
    ],
    href: "/services/private-pay",
  },
  {
    title: "Placement & Transitions",
    icon: "🏠",
    outcomes: [
      "Coordinated move-in and care team setup",
      "Reduced readmissions and smoother transitions",
      "Discharge planning support",
    ],
    href: "/services/private-pay",
  },
  {
    title: "Home-Based Supports Coordination",
    icon: "🧑‍⚕️",
    outcomes: [
      "Reliable scheduling and oversight",
      "Caregiver communication and escalation",
      "Continuity of care across providers",
    ],
    href: "/services/private-pay",
  },
  {
    title: "Benefits & Paperwork Management",
    icon: "📄",
    outcomes: [
      "Document prep and submission support",
      "Follow-up on authorizations and appeals",
      "Coordination with payers and providers",
    ],
    href: "/services/private-pay",
  },
];
const comparisonItems = [
  {
    label: "Who it's for",
    private:
      "Families paying privately who want personalized ongoing coordination.",
    medicaid:
      "Agencies and providers referring clients who need intake and coordination.",
  },
  {
    label: "Scope",
    private:
      "Monthly oversight, advocacy, waiver navigation, placement support.",
    medicaid:
      "Fast referral intake, triage, consent collection, and updates to referring agencies.",
  },
  {
    label: "Billing",
    private: "Private pay or sliding-scale arrangements.",
    medicaid: "Partner-driven arrangements and agency contracts.",
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
        <p className="text-gray-600 mt-2">
          Outcome-focused services to reduce burden and improve access to care.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-lg shadow-sm p-5 sm:p-6 flex flex-col transition-transform duration-200 hover:scale-[1.02]"
            >
              <div className="text-3xl sm:text-4xl">{s.icon}</div>
              <h3 className="mt-3 text-base sm:text-lg font-semibold">
                {s.title}
              </h3>
              <ul className="mt-3 flex-1 text-sm sm:text-base list-disc list-inside text-gray-700 space-y-1">
                {s.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
              <div className="mt-4">
                <ButtonUI
                  as="a"
                  href={s.href}
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  Learn more
                </ButtonUI>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-12 px-4 py-8 bg-gray-50 rounded-2xl">
          <div className="max-w-5xl mx-auto">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-2xl font-semibold text-gray-900"
            >
              Private Pay vs Medicaid Partner
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-sm text-gray-600 mt-2"
            >
              A quick comparison of how our Private Pay services differ from the
              Medicaid Partner Pathway.
            </motion.p>

            <div className="mt-8 space-y-8">
              {comparisonItems.map((row, i) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-5"
                >
                  <h4 className="text-base font-semibold text-gray-800 mb-3">
                    {row.label}
                  </h4>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                      <p className="text-sm text-gray-700">{row.private}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                      <p className="text-sm text-gray-700">{row.medicaid}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
              >
                <h4 className="text-base font-semibold text-gray-800 mb-4">
                  Next Step
                </h4>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors">
                    <p className="text-sm text-gray-700 mb-4">Private Pay</p>
                    <ButtonUI
                      as="a"
                      href="/intake"
                      variant="primary"
                      className="w-full"
                    >
                      Start Intake
                    </ButtonUI>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors">
                    <p className="text-sm text-gray-700 mb-4">
                      Medicaid Partner
                    </p>
                    <ButtonUI
                      as="a"
                      href="/partners/referral"
                      variant="secondary"
                      className="w-full"
                    >
                      Send a referral
                    </ButtonUI>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </section>

      <div className="w-full mx-auto px-6">
        <TestimonialSlider
          autoplay
          pauseOnHover
          items={[
            {
              quote: "Bridgeforth saved our family weeks of paperwork.",
              name: "A. Smith",
              city: "Atlanta",
            },
            {
              quote: "Clear guidance and steady follow-up.",
              name: "J. Lee",
              city: "McDonough",
            },
          ]}
        />
      </div>
      <CTABand />
      <ReasonsSection />
      <Footer />
    </>
  );
}
