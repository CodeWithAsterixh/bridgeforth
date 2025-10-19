import { Header, Footer } from 'components';

export function meta() {
  return [{ title: 'About - Bridgeforth' }];
}

export default function About() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-semibold">About Bridgeforth Consulting Group</h1>
        <p className="mt-2 text-gray-600">We help families and agencies navigate Medicaid, long-term care transitions, and disability supports with clarity and compassion.</p>

        <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold">Our mission</h3>
            <p className="mt-2 text-sm text-gray-600">To simplify care coordination and protect families' time by providing clear plans and accountable coordination.</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold">Credentials</h3>
            <p className="mt-2 text-sm text-gray-600">Our team has social work and case management experience — we are not a medical provider; we coordinate services and protect privacy.</p>
          </div>
        </section>

        <section className="mt-6 bg-gray-50 p-6 rounded">
          <h4 className="font-semibold">Team</h4>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gray-200" />
              <h5 className="mt-3 font-semibold">Founder</h5>
              <p className="text-sm text-gray-600">Brief bio line</p>
            </div>

            <div className="bg-white p-4 rounded shadow text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gray-200" />
              <h5 className="mt-3 font-semibold">Lead Clinician</h5>
              <p className="text-sm text-gray-600">Brief bio line</p>
            </div>

            <div className="bg-white p-4 rounded shadow text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gray-200" />
              <h5 className="mt-3 font-semibold">Operations</h5>
              <p className="text-sm text-gray-600">Brief bio line</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
