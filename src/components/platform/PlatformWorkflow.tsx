"use client";

import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem, TextReveal, BlurReveal, TiltCard } from "@/components/ui/animation-wrappers";
import { cn } from "@/lib/utils";

export default function PlatformWorkflow() {
  const steps = [
    {
      title: "Connect",
      desc: "Integrate your OMS/TMS via API.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
      )
    },
    {
      title: "Assign",
      desc: "AI matches orders to riders.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
      )
    },
    {
      title: "Deliver",
      desc: "Real-time execution & proof.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
      )
    },
    {
      title: "Settle",
      desc: "Instant automated reconciliation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
      )
    }
  ];

  return (
    <section className="bg-gradient-to-b from-black to-indigo-950/20 py-24 md:py-32 overflow-hidden">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            <TextReveal delay={0.1}>A Single Connected Workflow</TextReveal>
          </h2>
          <BlurReveal delay={0.2}>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              From the moment an order is created to the final payout, data flows seamlessly through Zyder.
            </p>
          </BlurReveal>
        </div>

        <div className="relative">
          {/* Animated Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-px bg-white/10 overflow-hidden z-0">
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"
            />
          </div>

          <StaggerContainer className="grid md:grid-cols-4 gap-8 relative z-10" delay={0.2}>
            {steps.map((step, i) => (
              <StaggerItem key={i}>
                <div className="relative group">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ delay: i * 0.05, duration: 0.4, ease: "easeOut" }}
                  >
                    <TiltCard className="w-20 h-20 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-violet-400 mb-6 relative z-10 group-hover:scale-110 group-hover:bg-white/5 group-hover:border-violet-500/50 transition-all mx-auto duration-300 shadow-2xl">
                      <div className="drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                        {step.icon}
                      </div>
                    </TiltCard>
                  </motion.div>
                  <div className="text-center px-2">
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
