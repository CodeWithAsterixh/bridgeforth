import { Header, Footer } from 'components';

export function meta() {
  return [
    { title: 'How It Works | Bridgeforth' },
    { name: 'description', content: 'Our four-step process: discovery, assessment, coordination, and ongoing oversight to get families the help they need.' },
    { rel: 'canonical', href: 'https://bridgeforthcg.com/how-it-works' },
    { property: 'og:title', content: 'How It Works | Bridgeforth' },
    { property: 'og:description', content: 'Our four-step process: discovery, assessment, coordination, and ongoing oversight to get families the help they need.' },
    { property: 'og:image', content: '/serviceimage.webp' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ];
}

export default function HowItWorks() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-semibold">How It Works</h1>
        <p className="mt-2 text-gray-600">A simple, four-step process to get you the right supports quickly.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded shadow text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center">1</div>
            <h4 className="mt-4 font-semibold">Quick discovery</h4>
            <p className="text-sm text-gray-600 mt-2">A 15-minute call to prioritize needs.</p>
          </div>

          <div className="bg-white p-6 rounded shadow text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center">2</div>
            <h4 className="mt-4 font-semibold">Assessment & plan</h4>
            <p className="text-sm text-gray-600 mt-2">We build a practical plan with clear next steps and timelines.</p>
          </div>

          <div className="bg-white p-6 rounded shadow text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center">3</div>
            <h4 className="mt-4 font-semibold">Coordination</h4>
            <p className="text-sm text-gray-600 mt-2">We connect with providers, agencies, and families to implement the plan.</p>
          </div>

          <div className="bg-white p-6 rounded shadow text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center">4</div>
            <h4 className="mt-4 font-semibold">Ongoing oversight</h4>
            <p className="text-sm text-gray-600 mt-2">Monthly check-ins and outcome tracking to keep things on course.</p>
          </div>
        </div>

        <aside className="mt-8 bg-gray-50 p-6 rounded">
          <h4 className="font-semibold">What to bring</h4>
          <ul className="mt-2 text-sm list-disc list-inside text-gray-700">
            <li>Relevant contact info</li>
            <li>Brief history of services and payers</li>
            <li>Any immediate safety concerns</li>
          </ul>
        </aside>
      </main>
      <Footer />
    </>
  );
}
