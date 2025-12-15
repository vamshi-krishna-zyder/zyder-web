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
    <section id="modules" className="py-24 md:py-32 relative">
      <div className="container-width">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Everything required to <span className="text-gradient-accent">operate at scale</span>
          </h2>
          <p className="text-xl text-slate-400">
            A modular platform that adapts to your specific logistics needs, from first mile to last mile.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {modules.map((module) => (
            <div
              key={module.title}
              className="group p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-violet-500/30 transition-all hover:bg-white/[0.07]"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {module.title}
              </h3>

              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                {module.description}
              </p>

              <div className="grid grid-cols-2 gap-3">
                {module.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm font-medium text-slate-300">
                    <div className={`w-1.5 h-1.5 rounded-full bg-${module.color}-400`} />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
