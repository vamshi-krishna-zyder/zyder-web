import { FadeIn, StaggerContainer, StaggerItem, TiltCard, TextReveal } from "@/components/ui/animation-wrappers";

export default function PlatformReliability() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-black/50">
      <div className="absolute inset-0 bg-violet-900/5 pointer-events-none" />

      <div className="container-width relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-xs font-medium text-green-400 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                System Status: Operational
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight mb-8">
                Built for <br />
                <span className="text-gradient-accent">mission-critical scale</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                When thousands of orders and payouts are at stake, downtime isn't an option. Zyder is engineered for resilience.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <TiltCard className="p-6 rounded-2xl bg-white/5 border border-white/10 group hover:border-violet-500/30 transition-all">
                  <div className="text-4xl font-bold text-white mb-2 font-mono group-hover:text-violet-400 transition-colors">99.99%</div>
                  <div className="text-sm text-slate-400">Uptime SLA</div>
                </TiltCard>
                <TiltCard className="p-6 rounded-2xl bg-white/5 border border-white/10 group hover:border-violet-500/30 transition-all">
                  <div className="text-4xl font-bold text-white mb-2 font-mono group-hover:text-green-400 transition-colors">ISO 27001</div>
                  <div className="text-sm text-slate-400">Security Certified</div>
                </TiltCard>
              </div>
            </FadeIn>
          </div>

          <div className="relative">
            {/* Abstract Shield Visual */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-violet-600/10 blur-[80px] -z-10 rounded-full" />

            <div className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-20">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-32 h-32 text-violet-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>

              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                Enterprise Grade Security
              </h3>

              <StaggerContainer className="space-y-4" delay={0.4}>
                {[
                  { title: "End-to-end Encryption", desc: "AES-256 bit encryption for all data at rest and in transit." },
                  { title: "Role-Based Access", desc: "Granular permission controls for your entire organization." },
                  { title: "Audit Logs", desc: "Complete visibility into every action and change." },
                  { title: "Daily Backups", desc: "Automated redundancy across multiple availability zones." }
                ].map((item, i) => (
                  <StaggerItem key={i}>
                    <div className="flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors group">
                      <div className="w-8 h-8 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-400 shrink-0 group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-slate-200 text-sm mb-1">{item.title}</div>
                        <div className="text-xs text-slate-500">{item.desc}</div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
