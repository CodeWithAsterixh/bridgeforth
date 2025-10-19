import { Header, Footer } from 'components';

export function meta() {
  return [{ title: 'Terms of Service - Bridgeforth' }];
}

export default function Terms() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-semibold">Terms of Service</h1>
        <p className="mt-2 text-gray-600">Standard terms for use of this site and our services.</p>
      </main>
      <Footer />
    </>
  );
}
