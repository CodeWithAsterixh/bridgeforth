import { Header, Footer, ButtonUI } from '../components';

export function meta() {
  return [
    { title: 'Page not found - Bridgeforth' },
    { name: 'description', content: 'The page you were looking for could not be found.' },
  ];
}

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl font-bold">404 — Page not found</h1>
        <p className="mt-4 text-gray-600">We couldn\'t find the page you were looking for.</p>
        <div className="mt-6">
          <ButtonUI as="a" href="/" variant="primary">Go back home</ButtonUI>
        </div>
      </main>
      <Footer />
    </>
  );
}
