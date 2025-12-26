import Image from "next/image";
import { TextReveal, BlurReveal, StaggerContainer, StaggerItem, TiltCard, FadeIn, Parallax } from "@/components/ui/animation-wrappers";

export default function CompanyPage() {
    return (
        <div className="pt-32 pb-24 overflow-x-hidden">
            {/* Mission Hero - Split Layout (Left Aligned) */}
            <section className="container-width mb-20 md:mb-32 pt-10 md:pt-20">
                <div className="grid xl:grid-cols-2 gap-12 items-center">
                    <div className="max-w-2xl text-center xl:text-left relative z-10 mx-auto xl:mx-0">
                        <BlurReveal delay={0.1}>
                            <div className="inline-flex justify-center xl:justify-start items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-medium text-violet-300 mb-6 backdrop-blur-sm">
                                <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                                Our Mission
                            </div>
                        </BlurReveal>

                        <BlurReveal delay={0.2}>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-8 leading-tight">
                                Building The Backbone <br />
                                <span className="text-gradient-accent">Of Modern Commerce</span>
                            </h1>
                        </BlurReveal>

                        <BlurReveal delay={0.4}>
                            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-lg mx-auto xl:mx-0">
                                Zyder was founded with a single mission: to bring transparency, efficiency, and fairness to the last-mile logistics industry.
                            </p>
                        </BlurReveal>
                    </div>

                    <div className="relative perspective-1000">
                        {/* Abstract Network Visual */}
                        <FadeIn delay={0.3} duration={0.8}>
                            <TiltCard className="relative rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-md shadow-2xl shadow-violet-900/20">
                                <Parallax offset={20} className="aspect-square md:aspect-[4/3] rounded-xl bg-black/50 overflow-hidden relative">
                                    <Image
                                        src="/company_hero_backbone_cine.png"
                                        alt="Global Logistics Backbone"
                                        fill
                                        className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                                        priority
                                    />
                                    {/* Overlay Gradient for integration */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                                </Parallax>
                            </TiltCard>
                        </FadeIn>
                        {/* Decorative Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-violet-600/20 blur-[100px] -z-10 rounded-full" />
                    </div>
                </div>
            </section>

            {/* Cinematic Values Grid */}
            {/* MOBILE FIX: Reduced padding from py-32 to py-20 for mobile */}
            <section className="bg-white/[0.02] border-y border-white/5 py-20 md:py-32 mb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay" />

                <div className="container-width relative z-10">
                    <div className="text-center mb-20">
                        <FadeIn>
                            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Built On Principle</h2>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                                The core pillars that define every decision we make at Zyder.
                            </p>
                        </FadeIn>
                    </div>

                    <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8" delay={0.2}>
                        {[
                            {
                                title: "Radical Transparency",
                                desc: "No black boxes. We believe in open data and clear communication between all stakeholders.",
                                image: "/value_transparency.png",
                                color: "from-violet-500/20 to-violet-900/20"
                            },
                            {
                                title: "Relentless Efficiency",
                                desc: "We obsess over shaving seconds off deliveries and pennies off costs to maximize value.",
                                image: "/value_efficiency.png",
                                color: "from-cyan-500/20 to-blue-900/20"
                            },
                            {
                                title: "Empowerment",
                                desc: "We build tools that help drivers, vendors, and brands grow their businesses together.",
                                image: "/value_empowerment.png",
                                color: "from-amber-500/20 to-orange-900/20"
                            }
                        ].map((value, i) => (
                            <StaggerItem key={i} className="h-full">
                                <TiltCard className="group relative h-full rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-white/20 transition-all duration-500 bg-black/40">
                                    {/* Abstract Visual Top Half */}
                                    <div className="relative h-64 w-full overflow-hidden">
                                        <Image
                                            src={value.image}
                                            alt={value.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t ${value.color} mix-blend-overlay opacity-50`} />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
                                    </div>

                                    {/* Content Bottom Half */}
                                    <div className="p-8 relative -mt-8 pt-0 z-10">
                                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                                            {value.title}
                                        </h3>
                                        <p className="text-slate-400 leading-relaxed font-light border-l border-white/10 pl-4">
                                            {value.desc}
                                        </p>
                                    </div>

                                    {/* Hover Glow */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                                </TiltCard>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Team / Stats */}
            <section className="container-width mb-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <FadeIn>
                            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Built By Logistics Experts</h2>
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
                        {/* MOBILE FIX: Adaptive height for team image (300px mobile, 500px desktop) */}
                        <TiltCard className="relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden glass-panel border border-white/10 group shadow-2xl">
                            <Image
                                src="/company_team_abstract.png"
                                alt="Zyder Collaborative Network"
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
