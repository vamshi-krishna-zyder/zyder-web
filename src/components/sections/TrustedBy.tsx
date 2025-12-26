import { StaggerContainer, StaggerItem, BlurReveal } from "@/components/ui/animation-wrappers";

export default function TrustedBy() {
    return (
        <section className="py-10 md:py-16 border-b border-white/5 bg-white/[0.02]">
            <div className="container-width">
                <BlurReveal delay={0.2}>
                    <p className="text-center text-xs md:text-sm font-medium text-slate-500 mb-8 md:mb-12 uppercase tracking-wider">
                        Powering next-gen logistics teams
                    </p>
                </BlurReveal>
                <StaggerContainer className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500" delay={0.4}>
                    {[
                        (<svg className="h-8 w-auto text-white fill-current" viewBox="0 0 140 30">
                            <path d="M15,5 L25,25 L5,25 Z" />
                            <text x="35" y="22" fontFamily="sans-serif" fontWeight="bold" fontSize="18" fill="currentColor">VERTEX</text>
                        </svg>),
                        (<svg className="h-8 w-auto text-white fill-current" viewBox="0 0 140 30">
                            <circle cx="15" cy="15" r="8" stroke="currentColor" strokeWidth="3" fill="none" />
                            <path d="M5,15 H25" stroke="currentColor" strokeWidth="2" />
                            <text x="35" y="22" fontFamily="sans-serif" fontWeight="bold" fontSize="18" fill="currentColor">HORIZON</text>
                        </svg>),
                        (<svg className="h-7 w-auto text-white fill-current" viewBox="0 0 140 30">
                            <rect x="5" y="5" width="20" height="20" rx="5" />
                            <text x="35" y="22" fontFamily="sans-serif" fontWeight="bold" fontSize="18" fill="currentColor">ELEVATE</text>
                        </svg>),
                        (<svg className="h-8 w-auto text-white fill-current" viewBox="0 0 140 30">
                            <circle cx="10" cy="15" r="4" /><circle cx="20" cy="10" r="3" /><circle cx="20" cy="20" r="3" />
                            <text x="35" y="22" fontFamily="sans-serif" fontWeight="bold" fontSize="18" fill="currentColor">NEBULA</text>
                        </svg>),
                        (<svg className="h-8 w-auto text-white fill-current" viewBox="0 0 140 30">
                            <path d="M10,15 L20,5 L30,15 L20,25 Z" fill="none" stroke="currentColor" strokeWidth="3" />
                            <text x="40" y="22" fontFamily="sans-serif" fontWeight="bold" fontSize="18" fill="currentColor">QUANTUM</text>
                        </svg>)
                    ].map((logo, i) => (
                        <StaggerItem key={i}>
                            <div className="opacity-50 hover:opacity-100 transition-all duration-300">
                                {logo}
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
