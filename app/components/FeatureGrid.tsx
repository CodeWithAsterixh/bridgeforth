import { FiActivity, FiUsers, FiGlobe, FiBriefcase } from 'react-icons/fi';

export default function FeatureGrid() {
  const cards = [
    { title: 'Financial Planning', subtitle: 'Outcomes-focused planning', img: '/images/FinancialPlanningimg.avif', icon: <FiActivity size={28} /> },
    { title: 'Quality Resourcing', subtitle: 'Right people, right support', img: '/images/QualityResourcing.webp', icon: <FiUsers size={28} /> },
    { title: 'Web & Research', subtitle: 'Evidence-informed plans', img: '/images/WebResearch.avif', icon: <FiGlobe size={28} /> },
    { title: 'Travel and Aviation', subtitle: 'Safe transitions', img: '/images/TravelandAviation.avif', icon: <FiBriefcase size={28} /> },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-center text-[#1e3a8a]">We Believe We Will Be Successful If Our Clients Are Successful.</h2>
        <p className="max-w-2xl mx-auto text-center text-gray-600 mt-4">We partner with families and agencies to reduce complexity and improve outcomes.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="bg-white shadow-lg rounded overflow-hidden">
              <div className="h-36 bg-gray-50 flex items-end justify-start p-3 text-white" style={{ backgroundImage: `url(${c.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="bg-white/80 text-[#1e3a8a] rounded p-2">{c.icon}</div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm">{c.title}</h3>
                <p className="text-xs text-gray-600 mt-2">{c.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="bg-[#2563eb] text-white px-4 py-2 rounded-md">More Service</button>
        </div>
      </div>
    </section>
  );
}
