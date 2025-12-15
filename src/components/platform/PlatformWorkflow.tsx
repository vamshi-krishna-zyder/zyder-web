export default function PlatformWorkflow() {
  return (
    <section className="bg-gradient-to-b from-black to-indigo-950/20 py-24 md:py-32">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            A single connected workflow
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            From the moment an order is created to the final payout, data flows seamlessly through Zyder.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2" />

          <div className="grid md:grid-cols-4 gap-8 relative">
            {[
              { title: "Connect", icon: "🔗", desc: "Integrate your OMS/TMS via API." },
              { title: "Assign", icon: "⚡", desc: "AI matches orders to riders." },
              { title: "Deliver", icon: "📍", desc: "Real-time execution & proof." },
              { title: "Settle", icon: "💰", desc: "Instant automated reconciliation." }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-3xl mb-6 relative z-10 group-hover:scale-110 group-hover:border-violet-500 transition-all mx-auto duration-300 shadow-xl">
                  {step.icon}
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
