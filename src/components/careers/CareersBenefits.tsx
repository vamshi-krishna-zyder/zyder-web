import { StaggerContainer, StaggerItem, TiltCard, FadeIn } from "@/components/ui/animation-wrappers";

export default function CareersBenefits() {
  const benefits = [
    { title: "Competitive Salary", desc: "Top-tier compensation packages with equity options.", icon: "💰" },
    { title: "Remote First", desc: "Work from anywhere. We care about output, not presence.", icon: "🌍" },
    { title: "Health Insurance", desc: "Comprehensive coverage for you and your family.", icon: "🏥" },
    { title: "Learning Budget", desc: "Annual stipend for courses, books, and conferences.", icon: "📚" },
    { title: "Home Office", desc: "Setup allowance to make your workspace comfortable.", icon: "🏡" },
    { title: "Retreats", desc: "Quarterly off-sites to connect and recharge.", icon: "🌴" }
  ];

  return (
    <section className="py-24">
      <div className="container-width">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Perks & Benefits
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-400">
              We take care of our team so they can focus on their best work.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-8" delay={0.2}>
          {benefits.map((item, i) => (
            <StaggerItem key={i}>
              <TiltCard className="glass-panel p-6 rounded-2xl hover:border-violet-500/50 transition-colors h-full">
                <div className="text-3xl mb-4 grayscale hover:grayscale-0 transition-all duration-300">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
