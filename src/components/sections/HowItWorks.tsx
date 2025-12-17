"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/animation-wrappers";
import { CheckCircle2, UserCheck, Settings, BarChart3, TrendingUp } from "lucide-react";

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    {
      title: "Onboard",
      desc: "Digital KYC and fleet registration in minutes.",
      icon: UserCheck
    },
    {
      title: "Configure",
      desc: "Set rules for auto-rostering and payouts.",
      icon: Settings
    },
    {
      title: "Operate",
      desc: "Live tracking vs SLA benchmarks.",
      icon: BarChart3
    },
    {
      title: "Optimize",
      desc: "AI-driven insights to cut costs.",
      icon: TrendingUp
    }
  ];

  return (
    <section ref={containerRef} className="py-32 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05),transparent_70%)]" />

      <div className="container-width relative z-10">
        <div className="mb-24 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">How Zyder Works</h2>
            <p className="text-slate-400 text-lg">From registration to revenue in four steps.</p>
          </FadeIn>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Timeline Line (Gray Guide) */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2" />

          {/* Animated Timeline Line (Purple Fill) */}
          <motion.div
            style={{ height }}
            className="absolute left-[20px] md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-violet-500 via-fuchsia-500 to-violet-500 -translate-x-1/2 origin-top"
          />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, i) => (
              <div key={i} className={cn("relative flex items-center md:justify-between", i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse")}>

                {/* Checkpoint Node (Center) */}
                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black border-4 border-slate-800 z-10 flex items-center justify-center shadow-xl group-hover:border-violet-500 transition-colors duration-500">
                  <div className="w-3 h-3 rounded-full bg-violet-500 animate-pulse" />
                </div>

                {/* Content Card */}
                <div className={cn("ml-16 md:ml-0 w-full md:w-[45%]", i % 2 === 0 ? "md:text-right" : "md:text-left")}>
                  <FadeIn delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                    <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/30 transition-all duration-300 hover:bg-white/[0.07]">
                      <div className={cn("flex items-center gap-4 mb-4", i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row")}>
                        <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400">
                          <step.icon size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-slate-400 text-lg leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </FadeIn>
                </div>

                {/* Empty Spacer for desktop grid balance */}
                <div className="hidden md:block w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
