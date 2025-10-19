import { FiActivity, FiUsers, FiGlobe, FiBriefcase } from 'react-icons/fi';

export default function FeatureGrid() {
  const cards = [
    { title: 'Financial Planning', subtitle: 'Outcomes-focused planning', img: '/images/FinancialPlanningimg.avif', icon: <FiActivity size={28} /> },
    { title: 'Quality Resourcing', subtitle: 'Right people, right support', img: '/images/QualityResourcing.webp', icon: <FiUsers size={28} /> },
    { title: 'Web & Research', subtitle: 'Evidence-informed plans', img: '/images/WebResearch.avif', icon: <FiGlobe size={28} /> },
    { title: 'Travel and Aviation', subtitle: 'Safe transitions', img: '/images/TravelandAviation.avif', icon: <FiBriefcase size={28} /> },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-[#1e3a8a]">
          We Believe We Will Be Successful If Our Clients Are Successful.
        </h2>
        <p className="max-w-2xl mx-auto text-center text-gray-600 mt-3 text-sm sm:text-base">
          We partner with families and agencies to reduce complexity and improve outcomes.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 transition-transform duration-200 hover:shadow-md hover:scale-[1.02]"
            >
              <div
                className="relative h-40 flex items-end justify-start p-4"
                style={{
                  backgroundImage: `url(${c.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="relative bg-white/80 text-[#1e3a8a] rounded-md p-2 shadow-sm">
                  {c.icon}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-800 text-base">{c.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{c.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="bg-[#2563eb] text-white px-5 py-2.5 rounded-md hover:bg-[#1e3a8a] transition-colors">
            More Service
          </button>
        </div>
      </div>
    </section>
  );
}
