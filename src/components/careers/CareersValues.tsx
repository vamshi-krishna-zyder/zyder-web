"use client";

import { StaggerContainer, StaggerItem, TiltCard, FadeIn } from "@/components/ui/animation-wrappers";
import { ArrowUpRight } from "lucide-react";

const values = [
  {
    id: "01",
    title: "Clarity",
    subtitle: "PRECISION OPTICS",
    desc: "We prioritize the direct path. No noise, just signal.",
    image: "/careers_monolith_texture_prism_1766139053852.png",
    color: "violet",
    gradient: "from-violet-500 via-fuchsia-500 to-purple-500",
    shadow: "group-hover:shadow-[0_0_50px_-10px_rgba(139,92,246,0.5)]"
  },
  {
    id: "02",
    title: "Ownership",
    subtitle: "CORE CONTROL",
    desc: "Take the wheel. Extreme agency is the standard.",
    image: "/platform_module_payouts_1766059367494.png",
    color: "emerald",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    shadow: "group-hover:shadow-[0_0_50px_-10px_rgba(16,185,129,0.5)]"
  },
  {
    id: "03",
    title: "Calmness",
    subtitle: "FLUID DYNAMICS",
    desc: "Turning operational chaos into rhythmic order.",
    image: "/platform_module_analytics_1766059387390.png",
    color: "amber",
    gradient: "from-amber-500 via-orange-500 to-red-500",
    shadow: "group-hover:shadow-[0_0_50px_-10px_rgba(245,158,11,0.5)]"
  },
  {
    id: "04",
    title: "Long-term",
    subtitle: "LATTICE STRUCTURE",
    desc: "Building foundations that last for decades.",
    image: "/careers_monolith_texture_structure_1766139010841.png",
    color: "cyan",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    shadow: "group-hover:shadow-[0_0_50px_-10px_rgba(6,182,212,0.5)]"
  },
];

export default function CareersValues() {
  return (
    <section className="py-24 bg-black relative overflow-hidden perspective-[2000px]">

      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px] animate-pulse delay-1000" />

      <div className="container-width relative z-10">

        {/* Header Section */}
        <div className="mb-24 relative">
          <FadeIn>
            <h2 className="text-5xl md:text-8xl font-bold font-display text-white tracking-tighter leading-[0.9] drop-shadow-2xl">
              Code Is <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-slate-600">
                Architecture
              </span>
            </h2>
          </FadeIn>
          {/* Decorative System Text */}
          <div className="absolute -top-12 -right-12 hidden md:block opacity-20">
            <div className="text-[200px] font-bold font-display leading-none text-white/5 select-none">V4</div>
          </div>
        </div>

        {/* Monolith Grid */}
        {/* Mobile Fix: Stacked on mobile, 2x2 on tablet, 4x1 on desktop */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-auto md:h-[500px]" delay={0.2}>
          {values.map((value, i) => (
            <StaggerItem key={i} className="h-full">
              <TiltCard className={`
                  group relative w-full h-[500px] md:h-full rounded-[32px] overflow-hidden
                  bg-black border border-white/10
                  transition-all duration-700
                  flex flex-col justify-end
                  ${value.shadow}
                  hover:-translate-y-2
              `}>

                {/* FULL BACKGROUND IMAGE LAYERS */}

                {/* Layer 1: The Image (Grayscale + Dimmed initially on Desktop, Visible on Mobile) */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover transition-all duration-700
                                   scale-100 lg:scale-110 lg:group-hover:scale-100
                                   grayscale-0 opacity-100 lg:grayscale lg:opacity-40 lg:group-hover:grayscale-0 lg:group-hover:opacity-100"
                  />
                </div>

                {/* Layer 2: Gradient Overlay (Fade out on hover | Always dimmed on mobile) */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 opacity-40 lg:opacity-100 lg:group-hover:opacity-40 transition-opacity duration-700 z-10" />

                {/* Layer 3: Color Glow (Fade in on hover | Always visible on mobile) */}
                <div className={`absolute inset-0 bg-gradient-to-t ${value.gradient} mix-blend-overlay transition-opacity duration-700 z-10 opacity-20 lg:opacity-0 lg:group-hover:opacity-20`} />

                {/* Layer 4: Noise Texture */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-10 pointer-events-none" />

                {/* CONTENT OVERLAY */}
                <div className="relative z-20 p-6 md:p-8 w-full">

                  {/* Floating ID Tag */}
                  <div className="absolute top-6 right-6 md:top-8 md:right-8 text-[12px] font-mono font-bold tracking-widest text-white lg:text-white/30 lg:group-hover:text-white transition-colors border border-white/10 rounded-full px-3 py-1 backdrop-blur-md">
                    {value.id}
                  </div>

                  {/* Title & Subtitle */}
                  <div className="transform transition-transform duration-0 translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0">
                    <span className={`block text-[10px] font-mono tracking-[0.2em] font-bold uppercase mb-2 text-${value.color}-400 lg:text-white/50 lg:group-hover:text-${value.color}-400 transition-colors`}>
                      {value.subtitle}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
                      {value.title}
                    </h3>
                  </div>

                  {/* Description (Reveals on Hover | Always Visible on Mobile) */}
                  <div className="grid transition-[grid-template-rows] duration-0 ease-out grid-rows-[1fr] lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr]">
                    <div className="overflow-hidden min-h-0">
                      <p className="text-slate-300 text-sm leading-relaxed border-t border-white/20 pt-3 pb-2 opacity-100 lg:opacity-90 font-medium text-shadow-sm">
                        {value.desc}
                      </p>
                    </div>
                  </div>

                </div>

              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
