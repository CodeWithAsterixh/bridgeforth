import { Header, Footer } from 'components';

export function meta() {
  return [{ title: 'Refer a Client - Bridgeforth' }];
}

export default function ReferAClient() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-semibold">Refer a Client</h1>
        <p className="mt-2 text-gray-600">If you're a provider or agency, use this page to submit a quick referral. For full partner referrals and pitch materials, see our Partner page.</p>

        <div className="mt-6 bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Quick referral</h3>
          <p className="mt-2 text-sm text-gray-600">Email us at <a href="mailto:info@bridgeforthcg.com" className="text-blue-600">info@bridgeforthcg.com</a> with the client's name, urgency, and a contact phone or email. We will follow up to collect required consent and details.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
