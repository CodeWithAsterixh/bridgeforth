export default function Hero() {
  const heroCards = [
    { title: "Business Planning, Strategy & Execution", desc: "Navigation made simple" },
    { title: "Financial Projections And Analysis", desc: "Advocacy that gets action" },
    { title: "International Business Opportunities", desc: "Coordination across supports" },
  ];

  return (
    <section className="relative isolate">
      <div className="h-[64vh] min-h-[500px] sm:min-h-[420px] relative">
        <span className="absolute inset-0 z-0 pointer-events-none brightness-50">
          <img
            src="/hero-background.avif"
            alt="Hero Background"
            className="w-full h-full object-cover object-center"
          />
        </span>

        <div className="relative z-20 max-w-6xl mx-auto px-5 py-20 text-center text-white">
          <p className="uppercase text-sm tracking-wider text-white/80">Best For Your Success.</p>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Experience You Can Trust, Service
            <br />
            You Can Count On.
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-white/90">
            We simplify Medicaid, long-term care, disability services, and daily supports so you don't have to manage it all.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-[#1e3a8a] px-5 py-2 rounded-md font-medium transition hover:bg-gray-100">
              Book a Free 15-Minute Call
            </button>
            <button className="bg-transparent border border-white text-white px-5 py-2 rounded-md transition hover:bg-white hover:text-[#1e3a8a]">
              Start Intake
            </button>
          </div>
        </div>
      </div>

      {/* Info cards overlapping bottom of hero */}
      <div className="max-w-6xl mx-auto px-5 relative -mt-14 pb-12 z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {heroCards.map((c) => (
            <div key={c.title} className="bg-white p-5 rounded-xl shadow-md flex flex-col transition-transform duration-200 hover:scale-[1.02]">
              <h4 className="font-semibold text-sm sm:text-base text-[#1e3a8a]">{c.title}</h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
