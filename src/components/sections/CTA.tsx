"use client";

import Link from "next/link";
import { Magnetic, ScaleIn } from "@/components/ui/animation-wrappers";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={containerRef} className="py-24 relative flex items-center justify-center overflow-hidden">

      <div className="container-width relative z-10">
        <ScaleIn className="w-full">
          {/* --- PORTAL FRAME (The Container) --- */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-black rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col items-center justify-center group">

            {/* Background Animation (Contained) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Accretion Disk */}
              <motion.div
                style={{ rotate, scale }}
                className="w-[120%] aspect-square rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(139,92,246,0.1)_90deg,transparent_180deg,rgba(236,72,153,0.1)_270deg,transparent_360deg)] opacity-60 blur-3xl mix-blend-screen"
              />
              {/* Starfield Overlay */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            </div>

            {/* Content Layer */}
            <div className="relative z-20 text-center px-6">
              <div className="mb-8 inline-block">
                <div className="px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white/70 text-xs font-mono tracking-widest uppercase">
                  Ready to Launch
                </div>
              </div>

              <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white mb-8 drop-shadow-2xl">
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">START THE REVOLUTION</span>
              </h2>

              <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
                <Magnetic strength={0.5} >
                  <Link
                    href="/contact"
                    className="group relative h-16 px-10 rounded-full bg-white text-black font-bold text-lg flex items-center justify-center overflow-hidden transition-all hover:scale-105"
                  >
                    <span className="relative z-10 group-hover:text-violet-900 transition-colors">Start Free Trial</span>
                    <div className="absolute inset-0 bg-violet-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </Link>
                </Magnetic>

                <Magnetic strength={0.3}>
                  <Link
                    href="/platform"
                    className="h-16 px-10 rounded-full bg-black/30 backdrop-blur-md text-white border border-white/20 font-medium text-lg flex items-center justify-center hover:bg-white/10 transition-all"
                  >
                    View Platform
                  </Link>
                </Magnetic>
              </div>
            </div>

            {/* Gloss Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}
