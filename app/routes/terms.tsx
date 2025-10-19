import { Header, Footer } from '~/components';

export function meta() {
  return [
    { title: 'Terms of Service | Bridgeforth' },
    { name: 'description', content: 'Standard terms for use of Bridgeforth services and website. Please contact us with questions about service agreements.' },
    { rel: 'canonical', href: 'https://bridgeforthcg.com/terms' },
    { property: 'og:title', content: 'Terms of Service | Bridgeforth' },
    { property: 'og:description', content: 'Standard terms for use of Bridgeforth services and website.' },
    { property: 'og:image', content: '/serviceimage.webp' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ];
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
