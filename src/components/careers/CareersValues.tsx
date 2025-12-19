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
              CODE IS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-slate-600">
                ARCHITECTURE.
              </span>
            </h2>
          </FadeIn>
          {/* Decorative System Text */}
          <div className="absolute -top-12 -right-12 hidden md:block opacity-20">
            <div className="text-[200px] font-bold font-display leading-none text-white/5 select-none">V4</div>
          </div>
        </div>

        {/* Monolith Grid */}
        <StaggerContainer className="grid md:grid-cols-4 gap-6 h-[500px]" delay={0.2}>
          {values.map((value, i) => (
            <StaggerItem key={i} className="h-full">
              <TiltCard className={`
                  group relative h-full rounded-[32px] overflow-hidden
                  bg-black border border-white/10
                  transition-all duration-700
                  flex flex-col justify-end
                  ${value.shadow}
                  hover:-translate-y-2
              `}>

                {/* FULL BACKGROUND IMAGE LAYERS */}

                {/* Layer 1: The Image (Grayscale + Dimmed initially) */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover transition-all duration-700
                                   scale-110 group-hover:scale-100
                                   grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </div>

                {/* Layer 2: Gradient Overlay (Fade out on hover) */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 group-hover:opacity-40 transition-opacity duration-700 z-10" />

                {/* Layer 3: Color Glow (Fade in on hover) */}
                <div className={`absolute inset-0 bg-gradient-to-t ${value.gradient} opacity-0 group-hover:opacity-20 mix-blend-overlay transition-opacity duration-700 z-10`} />

                {/* Layer 4: Noise Texture */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-10 pointer-events-none" />

                {/* CONTENT OVERLAY */}
                <div className="relative z-20 p-8 w-full">

                  {/* Floating ID Tag */}
                  <div className="absolute top-8 right-8 text-[12px] font-mono font-bold tracking-widest text-white/30 group-hover:text-white transition-colors border border-white/10 rounded-full px-3 py-1 backdrop-blur-md">
                    {value.id}
                  </div>

                  {/* Title & Subtitle */}
                  <div className="transform transition-transform duration-500 group-hover:translate-y-0 translate-y-4">
                    <span className={`block text-[10px] font-mono tracking-[0.2em] font-bold uppercase mb-2 text-white/50 group-hover:text-${value.color}-400 transition-colors`}>
                      {value.subtitle}
                    </span>
                    <h3 className="text-4xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
                      {value.title}
                    </h3>
                  </div>

                  {/* Description (Reveals on Hover) */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                    <div className="overflow-hidden">
                      <p className="text-slate-300 text-sm leading-relaxed border-t border-white/20 pt-4 pb-2 opacity-90 font-medium text-shadow-sm">
                        {value.desc}
                      </p>
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white mt-2">
                        <span>Initialize</span>
                        <ArrowUpRight className="w-3 h-3 animate-bounce" />
                      </div>
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
