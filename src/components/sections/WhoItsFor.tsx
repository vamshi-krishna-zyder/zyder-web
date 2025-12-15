export default function WhoItsFor() {
  const audiences = [
    {
      label: "For 3PL Vendors",
      title: "Scale Operations",
      desc: "Manage multiple fleets, automate driver payouts, and reduce administrative overhead by 90%."
    },
    {
      label: "For D2C Brands",
      title: "Own the Experience",
      desc: "Gain full visibility into last-mile delivery. Improve customer satisfaction with accurate ETAs."
    },
    {
      label: "For Delivery Agents",
      title: "Earn with Transparency",
      desc: "Real-time earnings tracking, instant withdrawals, and clear roster management."
    }
  ];

  return (
    <section className="py-24 bg-white/[0.02] border-y border-white/5">
      <div className="container-width">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Who We Empower</h2>
          <p className="text-slate-400">Zyder adapts to your role in the logistics ecosystem.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((item, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/50 transition-colors group">
              <div className="text-sm font-semibold text-violet-400 mb-2 uppercase tracking-wide">
                {item.label}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
