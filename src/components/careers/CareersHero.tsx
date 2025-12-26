"use client";

import Link from "next/link";
import { FadeIn, BlurReveal } from "@/components/ui/animation-wrappers";

export default function CareersHero() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* 1. Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black z-10" />
        <div className="absolute inset-0 bg-black/20 z-10" /> {/* General overlay for text contrast */}
        <img
          src="/careers_hero_studio_daylight_1766133311515.png"
          alt="Zyder Builders Studio"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* 2. Clean Typography Content */}
      <div className="container-width relative z-20 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm font-medium text-white mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            We Are Hiring Builders
          </div>
        </FadeIn>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-tight mb-8 drop-shadow-2xl">
          <BlurReveal delay={0.1}>Build The</BlurReveal> <br />
          <BlurReveal delay={0.2}>
            <span className="text-white">Future Of Logistics</span>
          </BlurReveal>
        </h1>

        <FadeIn delay={0.4}>
          <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-lg font-light">
            Join the team rewriting the operating system for global commerce. <br className="hidden md:block" />
            Solve hard problems at scale.
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#open-roles" className="h-14 px-8 rounded-full bg-white text-black font-semibold text-lg flex items-center justify-center hover:bg-slate-200 transition-colors shadow-lg shadow-white/10">
              View Open Roles
            </Link>
            <Link href="/company" className="h-14 px-8 rounded-full bg-white/10 text-white font-semibold text-lg flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-md">
              Our Mission
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
