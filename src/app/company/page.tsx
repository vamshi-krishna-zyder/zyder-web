import Image from "next/image";
import { TextReveal, BlurReveal, StaggerContainer, StaggerItem, TiltCard, FadeIn } from "@/components/ui/animation-wrappers";

export default function CompanyPage() {
    return (
        <div className="pt-32 pb-24">
            {/* Mission Hero */}
            <section className="container-width mb-24 text-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-8 leading-tight">
                    <TextReveal>We're building the</TextReveal> <span className="text-gradient-accent"><TextReveal delay={0.2}>backbone of modern commerce</TextReveal></span>
                </h1>
                <BlurReveal delay={0.4}>
                    <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Zyder was founded with a single mission: to bring transparency, efficiency, and fairness to the last-mile logistics industry through advanced technology.
                    </p>
                </BlurReveal>
            </section>

            {/* Values Grid */}
            <section className="bg-white/[0.02] border-y border-white/5 py-24 mb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay" />

                <div className="container-width relative z-10">
                    <div className="text-center mb-16">
                        <FadeIn>
                            <h2 className="text-3xl font-bold font-display mb-4">Our Values</h2>
                        </FadeIn>
                    </div>
                    <StaggerContainer className="grid md:grid-cols-3 gap-8" delay={0.2}>
                        {[
                            { title: "Transparency First", desc: "We believe in open data and clear communication between all stakeholders." },
                            { title: "Relentless Efficiency", desc: "We obsess over shaving seconds off deliveries and pennies off costs." },
                            { title: "Empowerment", desc: "We build tools that help drivers, vendors, and brands grow their businesses." }
                        ].map((value, i) => (
                            <StaggerItem key={i}>
                                <TiltCard className="glass-panel p-8 rounded-2xl h-full border border-white/10 hover:border-violet-500/30 transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center mb-6 text-violet-400 group-hover:scale-110 transition-transform">
                                        <div className="w-2 h-2 rounded-full bg-violet-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-violet-200 transition-colors">{value.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{value.desc}</p>
                                </TiltCard>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Team / Stats */}
            <section className="container-width mb-24">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <FadeIn>
                            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Built by logistics experts</h2>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                                Our team combines decades of experience in logistics, supply chain, and high-scale software engineering. We understand the pain points because we've lived them.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.4}>
                            <div className="grid grid-cols-2 gap-8">
                                <TiltCard className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="text-4xl font-bold text-white mb-2 font-mono">50M+</div>
                                    <div className="text-sm text-slate-500">Deliveries Processed</div>
                                </TiltCard>
                                <TiltCard className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="text-4xl font-bold text-white mb-2 font-mono">10k+</div>
                                    <div className="text-sm text-slate-500">Active Riders</div>
                                </TiltCard>
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.6}>
                        <TiltCard className="relative h-[500px] w-full rounded-2xl overflow-hidden glass-panel border border-white/10 group shadow-2xl">
                            <Image
                                src="/company_team.png"
                                alt="Zyder Global Team"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8">
                                <div className="text-white font-bold text-2xl mb-1">Global Team</div>
                                <div className="text-slate-300 text-sm flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    Building from Bangalore, Mumbai, and remotely
                                </div>
                            </div>
                        </TiltCard>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
