
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
    <section ref={containerRef} className="relative md:h-[400vh] h-auto bg-black text-white">

      {/* --- MOBILE VIEW (Vertical Stack) --- */}
      <div className="md:hidden flex flex-col gap-20 py-20 px-4 container-width">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col gap-6">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-white/5 mix-blend-overlay" />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-violet-500 font-mono text-xs tracking-wider">0{index + 1}</span>
                <h3 className="text-3xl font-bold font-display">{feature.title}</h3>
              </div>
              <p className="text-slate-400 leading-relaxed pl-4 border-l-2 border-white/20">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* --- DESKTOP VIEW (Sticky Scroll) --- */}
      <div className="hidden md:flex sticky top-20 h-[calc(100vh-5rem)] flex-col md:flex-row items-center overflow-hidden">

        {/* Background / Image Area (Right Side, but visually dominant) */}
        <div className="absolute inset-0 md:relative md:w-3/5 h-full order-2 md:order-2">
          {/* MOBILE FIX: Vertical gradient on mobile for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-transparent z-10 md:bg-gradient-to-r md:from-black md:via-transparent md:to-transparent" />

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
        <div className="relative z-20 w-full md:w-2/5 h-full flex flex-col justify-center p-6 md:p-20 order-1 md:order-1">
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

              <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 font-display leading-tight">
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
