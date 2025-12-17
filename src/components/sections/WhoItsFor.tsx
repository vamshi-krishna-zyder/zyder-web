"use client";

import { StaggerContainer, StaggerItem, TiltCard, TextReveal, FadeIn } from "@/components/ui/animation-wrappers";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function WhoItsFor() {
  const audiences = [
    {
      label: "For 3PL Vendors",
      title: "Scale Operations",
      desc: "Manage multiple fleets, automate driver payouts, and reduce administrative overhead by 90%.",
      image: "/who_fleet_v2.png",
      className: "md:col-span-2 md:row-span-2 min-h-[400px]"
    },
    {
      label: "For D2C Brands",
      title: "Own the Experience",
      desc: "Gain full visibility into last-mile delivery. Improve customer satisfaction with accurate ETAs.",
      image: "/who_brand_v2.png",
      className: "md:col-span-1 md:row-span-1 min-h-[300px]"
    },
    {
      label: "For Delivery Agents",
      title: "Earn with Transparency",
      desc: "Real-time earnings tracking, instant withdrawals, and clear roster management.",
      image: "/who_driver_v2.png",
      className: "md:col-span-1 md:row-span-1 min-h-[300px]"
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container-width relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
            <TextReveal>Who We Empower</TextReveal>
          </h2>
          <FadeIn delay={0.2}>
            <p className="text-slate-400 text-lg">Zyder adapts to your role in the logistics ecosystem.</p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          {audiences.map((item, idx) => (
            <StaggerItem key={idx} className={cn("relative group", item.className)}>
              <TiltCard className="h-full w-full rounded-3xl overflow-hidden border border-white/10 relative">

                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-semibold text-violet-300 mb-4 uppercase tracking-wide">
                    {item.label}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 leading-tight group-hover:text-violet-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed max-w-sm opacity-90 group-hover:opacity-100">
                    {item.desc}
                  </p>
                </div>

                {/* Hover Glitch/Highlight */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-violet-500/30 rounded-3xl transition-colors duration-500 pointer-events-none" />
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
