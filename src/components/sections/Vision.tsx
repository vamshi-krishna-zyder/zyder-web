"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextReveal, BlurReveal } from "@/components/ui/animation-wrappers";
import Image from "next/image";

export default function Vision() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    // FIX applied: min-h-screen to ensure full height for animation
    <section ref={containerRef} className="py-24 md:py-48 relative overflow-hidden flex items-center justify-center min-h-screen bg-black">

      {/* 3D Holographic Globe (CSS Code-First) */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">

        {/* Planet Core */}
        <motion.div
          style={{ y, opacity }}
          // MOBILE FIX: Use VW for responsive sizing on all phones
          className="w-[80vw] h-[80vw] md:w-[80vmin] md:h-[80vmin] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_60%)] rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />

        {/* Planet Wireframe/Surface */}
        <motion.div
          style={{ rotate }}
          className="w-[70vw] h-[70vw] md:w-[60vmin] md:h-[60vmin] rounded-full border border-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_100px_rgba(139,92,246,0.1)] opacity-40 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:2rem_2rem] md:bg-[size:4rem_4rem] opacity-50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.1),transparent_70%)]" />
          {/* Planet Texture Overlay */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-60 mix-blend-screen"
          >
            <Image
              src="/vision_planet_texture.png"
              alt="Digital Planet Texture"
              fill
              className="object-cover scale-110"
            />
          </motion.div>
        </motion.div>

        {/* Orbiting Elements (Data Satellites) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute w-[90vw] h-[90vw] md:w-[70vmin] md:h-[70vmin] rounded-full border border-violet-500/10 border-dashed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute w-[100vw] h-[100vw] md:w-[90vmin] md:h-[90vmin] rounded-full border border-indigo-500/5 border-dashed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />

      </div>

      <div className="container-width relative text-center z-10 mix-blend-screen px-4">
        {/* MOBILE FIX: Scaled text text-3xl (Mobile) -> text-5xl (Large Phone) -> text-6xl (Tablet) -> text-8xl (Desktop) */}
        <h2 className="max-w-5xl mx-auto text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-[0.9] font-display mb-12 tracking-tight">
          <span className="block text-slate-500 opacity-50 text-xs sm:text-sm md:text-xl lg:text-4xl font-light mb-4 tracking-widest uppercase">Unified Network</span>
          <TextReveal>INFRASTRUCTURE</TextReveal> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40"><TextReveal delay={0.2}>FOR MODERN CITIES</TextReveal></span>
        </h2>

        <BlurReveal delay={0.4}>
          <div className="relative inline-block max-w-2xl mx-auto">
            <p className="text-lg md:text-2xl text-violet-200/80 leading-relaxed font-light">
              Connecting thousands of drivers across major metros. Processing millions of deliveries with 99.9% uptime.
            </p>
          </div>
        </BlurReveal>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-12"
        >
          <div className="flex items-center justify-center gap-2 text-sm font-mono text-violet-400/60 uppercase tracking-widest">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            System Operational
          </div>
        </motion.div>
      </div>
    </section>
  );
}
