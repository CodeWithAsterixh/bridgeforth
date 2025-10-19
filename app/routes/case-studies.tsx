import { Header, Footer } from 'components';

export function meta() {
  return [{ title: 'Case Studies - Bridgeforth' }];
}

export default function CaseStudies() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-semibold">Case Studies & Outcomes</h1>
        <p className="mt-2 text-gray-600">Short examples of how our coordination improves outcomes.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold">Hospital-to-home</h3>
            <p className="mt-2 text-sm text-gray-600">Situation: Discharged without home supports. Action: Coordinated caregivers and equipment. Result: Successful return home and avoided readmission.</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold">Waiver approval</h3>
            <p className="mt-2 text-sm text-gray-600">Situation: Family stuck in approval process. Action: Managed paperwork and appeals. Result: Faster approval and services started.</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold">Caregiver relief</h3>
            <p className="mt-2 text-sm text-gray-600">Situation: Caregiver overwhelmed. Action: Implemented monthly oversight and delegation. Result: Reduced burden and clearer plan.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
