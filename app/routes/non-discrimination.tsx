import { Header, Footer } from 'components';

export function meta() {
  return [{ title: 'Non-Discrimination - Bridgeforth' }];
}

export default function NonDiscrimination() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-semibold">Non-Discrimination</h1>
        <p className="mt-2 text-gray-600">We provide services without discrimination and comply with applicable laws.</p>
      </main>
      <Footer />
    </>
  );
}
