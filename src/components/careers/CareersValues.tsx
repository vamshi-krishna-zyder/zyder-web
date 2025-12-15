const values = [
  {
    title: "Clarity over complexity",
    desc: "We build systems that reduce confusion, not add to it. If it explains itself, it's built right.",
    icon: "💡"
  },
  {
    title: "Ownership matters",
    desc: "We trust people to take responsibility. You ship it, you own it, you improve it.",
    icon: "👑"
  },
  {
    title: "Calm execution",
    desc: "We solve hard problems without panic. Urgency is fine, frenzy is not.",
    icon: "🧘"
  },
  {
    title: "Long-term thinking",
    desc: "We optimize for durability. Quick hacks today become technical debt tomorrow. We pay it down early.",
    icon: "🔭"
  },
];

export default function CareersValues() {
  return (
    <section className="py-24 bg-white/[0.02] border-y border-white/5">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">How we work</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Culture isn't about ping pong tables. It's about how we utilize our collective intelligence to solve problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition-colors"
            >
              <div className="text-4xl mb-6 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center border border-white/5">{value.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
