
"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { TextReveal, BlurReveal } from "@/components/ui/animation-wrappers";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Unified Workforce",
    description: "Onboard, verify, and manage your entire fleet in one place. Handle rosters, attendance, and compliance effortlessly.",
    image: "/solution_workforce_gen.png",
    id: 0
  },
  {
    title: "Automated Payouts",
    description: "Eliminate payroll errors. Calculate dynamic incentives and process instant payouts based on real-time performance data.",
    image: "/solution_payouts_gen.png",
    id: 1
  },
  {
    title: "Live Operations",
    description: "Track every movement in real-time. Detect anomalies, re-route instantly, and keep promised delivery windows.",
    image: "/solution_ops_gen.png",
    id: 2
  },
  {
    title: "Business Intelligence",
    description: "Turn raw data into profitability. Analyze cost-per-delivery, rider performance, and hub efficiency.",
    image: "/solution_analytics_gen.png",
    id: 3
  }
];

export default function Solution() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to index
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Divide the scroll range into 4 segments (0-0.25, 0.25-0.5, etc.)
      const newIndex = Math.min(
        Math.floor(latest * features.length),
        features.length - 1
      );
      setActiveIndex(newIndex);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-black text-white">
      {/* The Sticky Viewport */}
      <div className="sticky top-0 h-screen flex flex-col md:flex-row items-center overflow-hidden">

        {/* Background / Image Area (Right Side, but visually dominant) */}
        <div className="absolute inset-0 md:relative md:w-3/5 h-full order-2 md:order-2">
          {/* MOBILE FIX: Darker gradient on mobile (via-black/80) to make text readable over image */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10 md:bg-gradient-to-r md:from-black md:via-transparent md:to-transparent" />

          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={features[activeIndex].image}
                alt={features[activeIndex].title}
                fill
                className="object-cover"
                quality={100}
                priority
              />
              {/* Scanline / Tech Overlay Effect */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content Area (Left Side) */}
        <div className="relative z-20 w-full md:w-2/5 h-full flex flex-col justify-center p-8 md:p-20 order-1 md:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: 20, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-w-md"
            >
              {/* Index Indicator */}
              <div className="flex items-center gap-4 mb-8">
                <div className="text-violet-500 font-mono text-sm tracking-widest">
                  0{activeIndex + 1} / 0{features.length}
                </div>
                <div className="h-px flex-1 bg-white/10 relative overflow-hidden">
                  <motion.div
                    layoutId="progressBar"
                    className="absolute inset-y-0 left-0 bg-violet-500 w-full"
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold mb-8 font-display leading-tight">
                {features[activeIndex].title}
              </h2>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed border-l-2 border-white/20 pl-6">
                {features[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
