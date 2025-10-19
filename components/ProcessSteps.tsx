import { FiPhone, FiClipboard, FiUsers } from 'react-icons/fi';

export default function ProcessSteps() {
  const steps = [
    { title: 'Quick call', desc: '15-minute discovery', icon: FiPhone },
    { title: 'Clear plan', desc: 'We create a simple action plan', icon: FiClipboard },
    { title: 'We coordinate', desc: 'We connect and follow up with providers', icon: FiUsers },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-xl font-semibold text-[#1e3a8a]">Our Process</h3>
        <p className="text-sm text-gray-600 max-w-2xl mx-auto mt-2">Simple steps to get you from uncertainty to a coordinated plan.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="bg-white p-6 rounded shadow">
              <div className="w-12 h-12 rounded-full bg-[#2563eb] text-white flex items-center justify-center mx-auto">{<s.icon />}</div>
              <h4 className="mt-4 font-semibold">{s.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
