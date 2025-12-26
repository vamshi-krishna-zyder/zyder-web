import { FadeIn, StaggerContainer, StaggerItem, TiltCard } from "@/components/ui/animation-wrappers";

export default function PlatformOverview() {
  return (
    <section className="bg-white/[0.02] border-y border-white/5 py-24 md:py-32 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay" />

      <div className="container-width relative z-10">
        <div className="grid xl:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight mb-8 text-center xl:text-left">
                Designed to Eliminate <br />
                <span className="text-white">Operational Chaos</span>
              </h2>
            </FadeIn>

            <StaggerContainer className="space-y-6" delay={0.2}>
              {[
                {
                  title: "Fragmented Data",
                  desc: "No single source of truth for deliveries, riders, or payouts.",
                  icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>)
                },
                {
                  title: "Manual Overload",
                  desc: "Ops teams wasting 40% of their time on spreadsheets.",
                  icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>)
                },
                {
                  title: "Leaky Operations",
                  desc: "Undefined costs and lost revenue due to lack of visibility.",
                  icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>)
                }
              ].map((item, i) => (
                <StaggerItem key={i}>
                  <TiltCard className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/30 transition-all hover:bg-white/[0.08] group cursor-default">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2 text-lg">{item.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <div className="relative">
            <FadeIn delay={0.3} duration={0.5} direction="left">
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/30 to-indigo-600/30 blur-3xl -z-10 rounded-full opacity-40 animate-pulse-slow" />
              <div className="glass-panel p-6 md:p-12 rounded-3xl relative border border-white/10 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 blur-2xl rounded-full" />

                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 rounded-full bg-violet-500" />
                  The Zyder Standard
                </h3>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  Zyder acts as the single system of record for logistics teams. By unifying workforce, deliveries, and finance, we enable you to scale without adding headcount.
                </p>

                <StaggerContainer className="space-y-4" delay={0.4}>
                  {[
                    "One source of truth across operations",
                    "Real-time workforce visibility",
                    "Structured workflows, not ad-hoc fixes",
                    "Transparent financial operations"
                  ].map((text, i) => (
                    <StaggerItem key={i}>
                      <div className="flex items-center gap-4 text-slate-300 p-3 rounded-lg hover:bg-white/5 transition-colors">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        </div>
                        <span className="font-medium">{text}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
