import { FiShield, FiClock, FiLayers, FiSmile } from 'react-icons/fi';

export default function ReasonsSection() {
  const items = [
    { title: 'Protecting Time', desc: 'We save you hours each week.', Icon: FiClock },
    { title: 'Trusted Advocacy', desc: 'We get results for families.', Icon: FiShield },
    { title: 'Coordinated Care', desc: 'One plan, many providers.', Icon: FiLayers },
    { title: 'Compassionate Team', desc: 'People-first support.', Icon: FiSmile },
  ];

  return (
    <section className="py-16 bg-blue-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-white">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Why Families Choose Us
        </h2>
        <p className="text-white/80 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
          Simple systems, caring people, reliable outcomes.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="bg-white/10 hover:bg-white/15 transition-colors duration-300 p-6 rounded-2xl flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                <it.Icon size={24} className="text-white" />
              </div>
              <h4 className="mt-4 text-lg font-semibold">{it.title}</h4>
              <p className="text-sm text-white/80 mt-2 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
