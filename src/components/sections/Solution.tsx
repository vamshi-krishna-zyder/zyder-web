export default function Solution() {
  const features = [
    {
      title: "Unified Workforce Management",
      description: "Onboard, verify, and manage your entire fleet in one place. Handle rosters, attendance, and compliance effortlessly.",
      gradient: "from-blue-400 to-cyan-300"
    },
    {
      title: "Automated Payout Engine",
      description: "Eliminate payroll errors. Calculate dynamic incentives and process instant payouts based on real-time performance data.",
      gradient: "from-violet-400 to-fuchsia-300"
    },
    {
      title: "Live Operations Command",
      description: "Track every movement in real-time. Detect anomalies, re-route instantly, and keep promised delivery windows.",
      gradient: "from-emerald-400 to-teal-300"
    },
    {
      title: "Deep Business Intelligence",
      description: "Turn raw data into profitability. Analyze cost-per-delivery, rider performance, and hub efficiency.",
      gradient: "from-orange-400 to-amber-300"
    }
  ];

  return (
    <section className="py-24 bg-black/40">
      <div className="container-width">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            One platform. <br />
            <span className="text-white">Complete operational control.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl">
            Replace your fragmented tech stack with a single cohesive operating system designed for scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group cursor-default">
              <div className={`h-1 w-20 rounded-full bg-gradient-to-r mb-6 opacity-50 group-hover:opacity-100 transition-opacity duration-300 ${feature.gradient}`} />
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                {feature.title}
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed max-w-md group-hover:text-slate-300 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
