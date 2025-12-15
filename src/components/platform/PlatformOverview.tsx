export default function PlatformOverview() {
  return (
    <section className="bg-white/[0.02] border-y border-white/5 py-24 md:py-32">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight mb-8">
              Designed to eliminate <br />
              <span className="text-white">operational chaos</span>
            </h2>

            <div className="space-y-6">
              {[
                { title: "Fragmented Data", desc: "No single source of truth for deliveries, riders, or payouts." },
                { title: "Manual Overload", desc: "Ops teams wasting 40% of their time on spreadsheets." },
                { title: "Leaky Operations", desc: "Undefined costs and lost revenue due to lack of visibility." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/30 to-indigo-600/30 blur-2xl -z-10 rounded-full opacity-50" />
            <div className="glass-panel p-8 md:p-12 rounded-2xl relative">
              <h3 className="text-2xl font-bold text-white mb-6">The Zyder Standard</h3>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Zyder acts as the single system of record for logistics teams. By unifying workforce, deliveries, and finance, we enable you to scale without adding headcount.
              </p>

              <ul className="space-y-4">
                {[
                  "One source of truth across operations",
                  "Real-time workforce visibility",
                  "Structured workflows, not ad-hoc fixes",
                  "Transparent financial operations"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
