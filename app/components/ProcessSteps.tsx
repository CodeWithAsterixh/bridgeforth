import { FiPhone, FiClipboard, FiUsers } from 'react-icons/fi';

export default function ProcessSteps() {
  const steps = [
    { title: 'Quick call', desc: '15-minute discovery', icon: FiPhone },
    { title: 'Clear plan', desc: 'We create a simple action plan', icon: FiClipboard },
    { title: 'We coordinate', desc: 'We connect and follow up with providers', icon: FiUsers },
  ];

  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <h3 className="text-2xl font-semibold text-[#1e3a8a]">Our Process</h3>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mt-2">
          Simple steps to move from uncertainty to a coordinated plan.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100 transition-transform duration-200 hover:scale-[1.02] hover:shadow-md"
            >
              <div className="w-14 h-14 rounded-full bg-[#2563eb]/10 text-[#2563eb] flex items-center justify-center mx-auto">
                <s.icon size={24} />
              </div>
              <h4 className="mt-4 text-base sm:text-lg font-semibold text-gray-800">{s.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
