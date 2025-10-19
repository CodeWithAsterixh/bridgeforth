export default function ValuePillars() {
  const items = [
    { title: 'Navigation made simple', desc: 'We guide you step-by-step through Medicaid and long-term care options.' },
    { title: 'Advocacy that gets action', desc: 'We speak with providers and agencies to get things moving.' },
    { title: 'Coordination across supports', desc: 'Medical, social, and home supports coordinated in one plan.' },
  ];

  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center transition-transform duration-200 hover:scale-[1.02] hover:shadow-md"
            >
              <h3 className="font-semibold text-[#1e3a8a] text-lg sm:text-xl">{it.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base mt-2">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
