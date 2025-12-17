"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Parallax, TextReveal, BlurReveal, Magnetic, TiltCard, VelocityScroll, HeroParallax } from "@/components/ui/animation-wrappers";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden perspective-1000">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[100px]" />
        <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px]" />
      </div>

      <div className="container-width relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <BlurReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-violet-300 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              Now available in Beta
            </div>
          </BlurReveal>

          <div className="mb-8">
            <VelocityScroll maxSkew={10}>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-display text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
                The Operating System for <br />
                <span className="text-gradient-accent">
                  Last-Mile Delivery
                </span>
              </h1>
            </VelocityScroll>
          </div>

          <BlurReveal delay={0.4}>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
              Unify your entire logistics stack. Manage workforce, automate payouts,
              and visualize real-time analytics in one powerful control layer.
            </p>
          </BlurReveal>

          <BlurReveal delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto h-auto min-h-[48px] justify-center">
              <Magnetic>
                <Link
                  href="/contact"
                  className="h-12 px-8 rounded-full bg-white text-black font-semibold flex items-center justify-center hover:bg-slate-200 transition-colors"
                >
                  Start Free Trial
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  href="/platform"
                  className="h-12 px-8 rounded-full bg-white/5 text-white border border-white/10 font-medium flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  View Platform
                </Link>
              </Magnetic>
            </div>
          </BlurReveal>
        </div>

        {/* Cinematic Dashboard Zoom */}
        <div className="mt-20 relative mx-auto max-w-6xl h-[60vh] md:h-[80vh]">
          <HeroParallax className="w-full h-full">
            <div className="relative w-full h-full rounded-xl bg-gradient-to-b from-white/10 to-white/5 p-1 backdrop-blur-sm shadow-2xl border border-white/10 overflow-hidden">
              <Image
                src="/hero_dashboard_wide_169.png"
                alt="Zyder Dashboard"
                fill
                className="object-cover object-top"
                priority
              />

              {/* Screen Reflection Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
            </div>
          </HeroParallax>

          {/* Decorative Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-20 blur-3xl -z-10 rounded-xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
