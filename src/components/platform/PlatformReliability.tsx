export default function PlatformReliability() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight mb-8">
              Built for <br />
              <span className="text-gradient-accent">mission-critical scale</span>
            </h2>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              When thousands of orders and payouts are at stake, downtime isn't an option. Zyder is engineered for resilience.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-bold text-white mb-2">99.99%</div>
                <div className="text-sm text-slate-400">Uptime SLA</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-bold text-white mb-2">ISO 27001</div>
                <div className="text-sm text-slate-400">Security Certified</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {["End-to-end Encryption", "Role-Based Access Control (RBAC)", "Audit Logs & Compliance", "Automated Backups"].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
