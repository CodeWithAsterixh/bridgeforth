export default function ValuePillars() {
  const items = [
    { title: 'Navigation made simple', desc: 'We guide you step-by-step through Medicaid and long-term care options.' },
    { title: 'Advocacy that gets action', desc: 'We speak with providers and agencies to get things moving.' },
    { title: 'Coordination across supports', desc: 'Medical, social, and home supports coordinated in one plan.' },
  ];

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="bg-white rounded shadow p-6 text-center">
              <h3 className="font-semibold text-[#1e3a8a]">{it.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
