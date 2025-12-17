import { BlurReveal, TextReveal, StaggerContainer, StaggerItem, SpotlightCard } from "@/components/ui/animation-wrappers";

const modules = [
  {
    title: "Workforce Management",
    description: "Onboard delivery agents, manage rosters, and track performance without manual coordination.",
    features: ["Digital Onboarding", "Auto-Rostering", "Performance Scoring", "Compliance Checks"],
    color: "violet"
  },
  {
    title: "Operations Control",
    description: "Monitor daily delivery operations in real time with clear accountability and structured workflows.",
    features: ["Live Tracking", "SLA Monitoring", "Incident Alerts", "Route Optimization"],
    color: "blue"
  },
  {
    title: "Payout Intelligence",
    description: "Automate payout calculations with full transparency to reduce disputes and financial leakage.",
    features: ["Dynamic Incentives", "Instant Payouts", "Deduction Mgmt", "Earnings Ledger"],
    color: "emerald"
  },
  {
    title: "Analytics & Insights",
    description: "Identify inefficiencies early and make informed decisions before problems escalate.",
    features: ["Cost Analysis", "Rider Retention", "Hub Performance", "Predictive Modeling"],
    color: "orange"
  },
];

export default function PlatformModules() {
  return (
    <section id="modules" className="py-24 md:py-32 relative bg-black">
      <div className="container-width">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
            <TextReveal delay={0.1}>Everything required to</TextReveal> <br />
            <span className="text-gradient-accent">
              <TextReveal delay={0.2}>operate at scale</TextReveal>
            </span>
          </h2>
          <BlurReveal delay={0.3}>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A modular platform that adapts to your specific logistics needs, from first mile to last mile.
            </p>
          </BlurReveal>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 gap-8" delay={0.2}>
          {modules.map((module) => (
            <StaggerItem key={module.title}>
              <SpotlightCard
                className="group h-full bg-white/5 border border-white/10 hover:border-violet-500/30 transition-all hover:bg-white/[0.07] overflow-hidden rounded-3xl"
                spotlightColor={`rgba(${module.color === 'violet' ? '139, 92, 246' : module.color === 'blue' ? '59, 130, 246' : module.color === 'emerald' ? '16, 185, 129' : '249, 115, 22'}, 0.15)`}
              >
                {/* 60% Visual Area - Abstract CSS UI */}
                <div className="h-64 md:h-80 w-full relative bg-gradient-to-br from-black/50 to-transparent p-6 overflow-hidden flex items-center justify-center">
                  {/* Abstract Grid Background */}
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />

                  {/* Abstract Shapes based on Type */}
                  {module.title.includes("Workforce") && (
                    <div className="relative w-48 h-32 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-3 flex flex-col gap-2 transform group-hover:scale-105 transition-transform duration-500 shadow-2xl">
                      {[1, 2, 3].map(i => <div key={i} className="h-6 w-full bg-white/10 rounded-md flex items-center px-2 gap-2"><div className="w-4 h-4 rounded-full bg-violet-500/50" /><div className="h-2 w-20 bg-white/20 rounded-full" /></div>)}
                    </div>
                  )}
                  {module.title.includes("Operations") && (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="absolute w-64 h-64 border border-blue-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
                      <div className="absolute w-48 h-48 border border-blue-500/40 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                      <div className="relative w-32 h-16 bg-blue-900/20 backdrop-blur-xl border border-blue-500/30 rounded-lg flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                        <span className="text-blue-400 font-mono text-xs">LIVE TRACKING</span>
                      </div>
                    </div>
                  )}
                  {module.title.includes("Payout") && (
                    <div className="relative flex items-end gap-2 h-32 w-48 pb-4 border-b border-emerald-500/30">
                      {[40, 70, 50, 90, 60].map((h, i) => (
                        <div key={i} className="w-full bg-emerald-500/20 rounded-t-sm relative group-hover:bg-emerald-500/40 transition-colors" style={{ height: `${h}%` }}>
                          {i === 3 && <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-emerald-500 rounded text-[10px] text-black font-bold">12%</div>}
                        </div>
                      ))}
                    </div>
                  )}
                  {module.title.includes("Analytics") && (
                    <div className="relative w-56 h-32 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-4 transform group-hover:rotate-1 transition-transform duration-500">
                      <div className="h-full w-full border-l border-b border-orange-500/30 relative">
                        <svg className="absolute inset-0 h-full w-full overflow-visible">
                          <path d="M0 80 Q 20 60, 40 70 T 80 40 T 140 30 T 180 10" fill="none" stroke="#f97316" strokeWidth="3" className="drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* 40% Content Area */}
                <div className="p-8 md:p-10 relative z-10 bg-black/50 backdrop-blur-sm -mt-4 border-t border-white/5">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    {module.title}
                  </h3>

                  <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                    {module.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {module.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm font-medium text-slate-300">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${module.color}-400 shadow-[0_0_8px_currentColor]`} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
