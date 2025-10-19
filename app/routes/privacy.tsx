import { Header, Footer } from 'components';

export function meta() {
  return [{ title: 'Privacy Policy - Bridgeforth' }];
}

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-semibold">Privacy Policy</h1>
        <p className="mt-2 text-gray-600">We collect only necessary information for service coordination and will never sell your personal data.</p>
        <section className="mt-6 bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Information we collect</h3>
          <p className="text-sm text-gray-600 mt-2">Contact and case-relevant information to coordinate services. We do not collect medical records without consent.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
