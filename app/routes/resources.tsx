import { Header, Footer } from 'components';

export function meta() {
  return [{ title: 'Resources - Bridgeforth' }];
}

export default function Resources() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-semibold">Resources & Guides</h1>
        <p className="mt-2 text-gray-600">Downloadable one-pagers and quick guides to help families navigate Medicaid and transitions.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="/resources/medicaid-basics.pdf" download className="block bg-white p-6 rounded shadow">
            <h3 className="font-semibold">Medicaid basics for families</h3>
            <p className="text-sm text-gray-600 mt-2">A short guide to eligibility and common questions.</p>
          </a>

          <a href="/resources/waiver-overview.pdf" download className="block bg-white p-6 rounded shadow">
            <h3 className="font-semibold">Waiver programs overview</h3>
            <p className="text-sm text-gray-600 mt-2">High-level summary of waiver options and next steps.</p>
          </a>

          <a href="/resources/hospital-to-home.pdf" download className="block bg-white p-6 rounded shadow">
            <h3 className="font-semibold">Hospital to home checklist</h3>
            <p className="text-sm text-gray-600 mt-2">A checklist to prepare for a safe return home.</p>
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
