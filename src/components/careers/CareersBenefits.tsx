export default function CareersBenefits() {
  const benefits = [
    { title: "Competitive Salary", desc: "Top-tier compensation packages with equity options." },
    { title: "Remote First", desc: "Work from anywhere. We care about output, not presence." },
    { title: "Health Insurance", desc: "Comprehensive coverage for you and your family." },
    { title: "Learning Budget", desc: "Annual stipend for courses, books, and conferences." },
    { title: "Home Office", desc: "Setup allowance to make your workspace comfortable." },
    { title: "Retreats", desc: "Quarterly off-sites to connect and recharge." }
  ];

  return (
    <section className="py-24">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Perks & Benefits
          </h2>
          <p className="text-xl text-slate-400">
            We take care of our team so they can focus on their best work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((item, i) => (
            <div key={i} className="glass-panel p-6 rounded-xl hover:border-violet-500/50 transition-colors">
              <div className="w-2 h-2 rounded-full bg-violet-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
