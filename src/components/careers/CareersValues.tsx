import { StaggerContainer, StaggerItem, TiltCard, FadeIn } from "@/components/ui/animation-wrappers";

const values = [
  {
    title: "Clarity over complexity",
    desc: "We build systems that reduce confusion, not add to it. If it explains itself, it's built right.",
    icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>)
  },
  {
    title: "Ownership matters",
    desc: "We trust people to take responsibility. You ship it, you own it, you improve it.",
    icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>)
  },
  {
    title: "Calm execution",
    desc: "We solve hard problems without panic. Urgency is fine, frenzy is not.",
    icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>)
  },
  {
    title: "Long-term thinking",
    desc: "We optimize for durability. Quick hacks today become technical debt tomorrow. We pay it down early.",
    icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>)
  },
];

export default function CareersValues() {
  return (
    <section className="py-24 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay" />

      <div className="container-width relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">How we work</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Culture isn't about ping pong tables. It's about how we utilize our collective intelligence to solve problems.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 gap-8" delay={0.3}>
          {values.map((value, i) => (
            <StaggerItem key={i}>
              <TiltCard
                className="group rounded-2xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition-all hover:border-violet-500/30"
              >
                <div className="text-violet-400 mb-6 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform shadow-lg shadow-violet-900/10">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg">
                  {value.desc}
                </p>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
