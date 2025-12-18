import { BlurReveal, TextReveal, StaggerContainer, StaggerItem, SpotlightCard } from "@/components/ui/animation-wrappers";
import Image from "next/image";

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

                  <div className="absolute inset-0 z-0">
                    <Image
                      src={
                        module.title.includes("Workforce") ? "/platform_module_workforce.png" :
                          module.title.includes("Operations") ? "/platform_module_operations.png" :
                            module.title.includes("Payout") ? "/platform_module_payouts.png" :
                              "/platform_module_analytics.png"
                      }
                      alt={module.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent opacity-60" />
                  </div>
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
