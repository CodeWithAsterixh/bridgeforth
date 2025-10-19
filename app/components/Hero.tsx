export default function Hero() {
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
        <div className="relative z-20 max-w-6xl mx-auto px-6 py-20 text-center text-white">
          <p className="uppercase text-sm tracking-wider text-white/80">
            Best For Your Success.
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
            Experience You Can Trust, Service
            <br />
            You Can Count On.
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm text-white/90">
            We simplify Medicaid, long-term care, disability services, and daily
            supports so you don't have to manage it all.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button className="bg-white text-[#1e3a8a] px-5 py-2 rounded-md font-medium">
              Book a Free 15-Minute Call
            </button>
            <button className="bg-transparent border border-white text-white px-5 py-2 rounded-md">
              Start Intake
            </button>
          </div>
        </div>
      </div>

      {/* info cards overlapping bottom of hero */}
      <div className="max-w-6xl mx-auto px-6 relative -mt-12 pb-12 z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Business Planning, Strategy & Execution",
              desc: "Navigation made simple",
            },
            {
              title: "Financial Projections And Analysis",
              desc: "Advocacy that gets action",
            },
            {
              title: "International Business Opportunities",
              desc: "Coordination across supports",
            },
          ].map((c) => (
            <div key={c.title} className="bg-white p-4 rounded shadow-md">
              <h4 className="font-semibold text-sm text-[#1e3a8a]">
                {c.title}
              </h4>
              <p className="text-xs text-gray-600 mt-2">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
