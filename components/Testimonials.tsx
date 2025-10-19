export default function Testimonials() {
  const quotes = [
    { quote: "BCG helped our family navigate Medicaid quickly and with compassion.", name: 'Maria, McDonough' },
    { quote: "They coordinated everything — I finally have a plan.", name: 'James, Stockbridge' },
  ];

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-xl font-semibold text-[#1e3a8a]">What Families Say</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {quotes.map((q, i) => (
            <blockquote key={i} className="bg-white p-6 rounded shadow">
              <p className="text-sm text-gray-700">“{q.quote}”</p>
              <footer className="mt-4 text-xs text-gray-600">— {q.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
