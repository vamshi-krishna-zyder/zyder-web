"use client";

import { StaggerContainer, StaggerItem, SpotlightCard, TextReveal, BlurReveal } from "@/components/ui/animation-wrappers";
import Image from "next/image";

export default function Problem() {
  const challenges = [
    {
      title: "Manual Ops Chaos",
      description: "Managing fleets via spreadsheets creates bottlenecks.",
      image: "/problem_chaos.png",
      delay: 0.1
    },
    {
      title: "Payout Friction",
      description: "Delayed manual payouts lead to high driver churn.",
      image: "/problem_friction.png",
      delay: 0.2
    },
    {
      title: "Data Blindspots",
      description: "No real-time visibility means lost efficiency.",
      image: "/problem_blindspots.png",
      delay: 0.3
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-black">
      {/* Cinematic Background Element */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Image
          src="/problem_glitch_abstract.png"
          alt="Chaos"
          fill
          className="object-cover opacity-50 mix-blend-color-dodge"
          onError={(e) => e.currentTarget.style.display = 'none'} // Fallback if image gen failed
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="container-width relative z-10">
        <div className="mb-20 md:text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-display tracking-tight">
            <TextReveal delay={0.1}>The old way is</TextReveal> <span className="text-red-500"><TextReveal delay={0.2}>broken.</TextReveal></span>
          </h2>
          <BlurReveal delay={0.3}>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Last-mile operations are bleeding money through manual chaos, friction, and blindness.
            </p>
          </BlurReveal>
        </div>

        {/* MOBILE FIX: Changed h-[50vh] to h-auto on mobile to allow natural stacking without clipping */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[50vh] min-h-[400px]">
          {challenges.map((item, index) => (
            <StaggerItem key={index} className="h-full">
              <SpotlightCard className="h-full group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 hover:border-white/20 transition-all duration-500">

                {/* Visual Background Image */}
                <div className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => e.currentTarget.style.display = 'none'}
                  />
                </div>

                {/* Dark Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:via-black/20 transition-all duration-500" />

                {/* Content */}
                {/* MOBILE FIX: Reduced padding p-6 and font sizes for mobile compact view */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform transition-transform duration-500 group-hover:-translate-y-2 translate-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white drop-shadow-md">{item.title}</h3>
                  <p className="text-slate-300 text-base md:text-lg leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {item.description}
                  </p>
                </div>

                {/* Glitch Overlay on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none mix-blend-overlay transition-opacity duration-300 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
