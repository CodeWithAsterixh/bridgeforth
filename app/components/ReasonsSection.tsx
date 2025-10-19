import { FiShield, FiClock, FiLayers, FiSmile } from 'react-icons/fi';

export default function ReasonsSection() {
  const items = [
    { title: 'Protecting Time', desc: 'We save you hours each week', Icon: FiClock },
    { title: 'Trusted Advocacy', desc: 'We get results for families', Icon: FiShield },
    { title: 'Coordinated Care', desc: 'One plan, many providers', Icon: FiLayers },
    { title: 'Compassionate Team', desc: 'People-first support', Icon: FiSmile },
  ];

  return (
    <section className="py-16" style={{ background: '#1e3a8a' }}>
      <div className="max-w-6xl mx-auto px-6 text-center text-white">
        <h2 className="text-xl font-semibold">Best Reasoned For Choose Our Service</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="bg-white/10 p-6 rounded text-center">
              <div className="w-14 h-14 rounded-full bg-white/20 mx-auto flex items-center justify-center">
                <it.Icon size={22} className="text-white" />
              </div>
              <h4 className="mt-4 font-semibold">{it.title}</h4>
              <p className="text-sm text-white/80 mt-2">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
