import Image from "next/image";

export default function CompanyPage() {
    return (
        <div className="pt-32 pb-24">
            {/* Mission Hero */}
            <section className="container-width mb-24 text-center">
                <h1 className="text-4xl md:text-6xl font-bold font-display mb-8">
                    We're building the <span className="text-gradient-accent">backbone of modern commerce</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                    Zyder was founded with a single mission: to bring transparency, efficiency, and fairness to the last-mile logistics industry through advanced technology.
                </p>
            </section>

            {/* Values Grid */}
            <section className="bg-white/[0.02] border-y border-white/5 py-24 mb-24">
                <div className="container-width">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold font-display mb-4">Our Values</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Transparency First", desc: "We believe in open data and clear communication between all stakeholders." },
                            { title: "Relentless Efficiency", desc: "We obsess over shaving seconds off deliveries and pennies off costs." },
                            { title: "Empowerment", desc: "We build tools that help drivers, vendors, and brands grow their businesses." }
                        ].map((value, i) => (
                            <div key={i} className="glass-panel p-8 rounded-2xl">
                                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                                <p className="text-slate-400">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team / Stats */}
            <section className="container-width mb-24">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Built by logistics experts</h2>
                        <p className="text-lg text-slate-400 mb-8">
                            Our team combines decades of experience in logistics, supply chain, and high-scale software engineering. We understand the pain points because we've lived them.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <div className="text-4xl font-bold text-white mb-2">50M+</div>
                                <div className="text-sm text-slate-500">Deliveries Processed</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-white mb-2">10k+</div>
                                <div className="text-sm text-slate-500">Active Riders</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[400px] w-full rounded-2xl overflow-hidden glass-panel border border-white/10 group">
                        <Image
                            src="/company_team.png"
                            alt="Zyder Global Team"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-6 left-6">
                            <div className="text-white font-bold text-xl">Global Team</div>
                            <div className="text-slate-300 text-sm">Building from Bangalore, Mumbai, and remotely</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
