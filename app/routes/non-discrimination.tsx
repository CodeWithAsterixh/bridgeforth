import { Header, Footer } from 'components';

export function meta() {
  return [
    { title: 'Non-Discrimination Policy | Bridgeforth' },
    { name: 'description', content: 'Bridgeforth provides services without discrimination and complies with laws protecting access to care.' },
    { rel: 'canonical', href: 'https://bridgeforthcg.com/non-discrimination' },
    { property: 'og:title', content: 'Non-Discrimination Policy | Bridgeforth' },
    { property: 'og:description', content: 'Bridgeforth provides services without discrimination and complies with laws protecting access to care.' },
    { property: 'og:image', content: '/serviceimage.webp' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ];
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
