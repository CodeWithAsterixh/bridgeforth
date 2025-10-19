import { Header, Footer } from 'components';

export function meta() {
  return [{ title: 'Pricing - Bridgeforth' }];
}

export default function Pricing() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-semibold">Pricing & Plans</h1>
        <p className="mt-2 text-gray-600">Flexible pricing designed for clarity. Contact us to get a personalized estimate.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold">Clarity Session</h3>
            <p className="mt-2 text-sm text-gray-600">One-time 15-minute consult to identify next steps.</p>
            <ul className="mt-3 text-sm list-disc list-inside text-gray-700">
              <li>15-minute prioritized call</li>
              <li>Recommended next steps</li>
            </ul>
            <div className="mt-4"><a href="/consultation" className="bg-blue-600 text-white px-4 py-2 rounded">Book a call</a></div>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold">Coordination Lite</h3>
            <p className="mt-2 text-sm text-gray-600">Short-term support for discrete tasks and authorization follow-up.</p>
            <ul className="mt-3 text-sm list-disc list-inside text-gray-700">
              <li>Task-based coordination</li>
              <li>Monthly check-ins</li>
            </ul>
            <div className="mt-4"><a href="/intake" className="bg-blue-600 text-white px-4 py-2 rounded">Start Intake</a></div>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold">Full Case Management</h3>
            <p className="mt-2 text-sm text-gray-600">Comprehensive ongoing coordination and advocacy across systems.</p>
            <ul className="mt-3 text-sm list-disc list-inside text-gray-700">
              <li>Comprehensive monthly plan</li>
              <li>Priority coordination and reporting</li>
            </ul>
            <div className="mt-4"><a href="/intake" className="bg-blue-600 text-white px-4 py-2 rounded">Start Intake</a></div>
          </div>
        </div>

        <div className="mt-8 bg-gray-50 p-6 rounded">
          <h4 className="font-semibold">Sliding scale & hardship policy</h4>
          <p className="mt-2 text-sm text-gray-600">We can discuss reduced-fee options on a case-by-case basis. Please mention this during your intake or call.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
