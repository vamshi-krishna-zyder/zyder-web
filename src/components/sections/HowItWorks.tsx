export default function HowItWorks() {
  const steps = [
    { title: "Onboard", desc: "Digital KYC and fleet registration in minutes." },
    { title: "Operate", desc: "Auto-rostering and route assignment." },
    { title: "Monitor", desc: "Live tracking vs SLA benchmarks." },
    { title: "Optimize", desc: "AI-driven insights to cut costs." }
  ];

  return (
    <section className="py-24">
      <div className="container-width">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display">How Zyder Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-600/50 to-indigo-600/50 -z-10" />

          {steps.map((step, i) => (
            <div key={i} className="relative pt-8 md:pt-0">
              <div className="md:absolute top-0 left-1/2 md:-translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-slate-900 border-4 border-violet-900 flex items-center justify-center font-bold text-xl text-white mb-4 md:mb-0 z-10 shadow-xl shadow-violet-900/20">
                {i + 1}
              </div>
              <div className="md:mt-12 md:text-center glass-panel p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
