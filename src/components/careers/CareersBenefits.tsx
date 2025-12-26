"use client";

import { FadeIn, TiltCard, StaggerContainer, StaggerItem } from "@/components/ui/animation-wrappers";

export default function CareersBenefits() {
  return (
    <section className="py-24 relative overflow-hidden bg-white/5">
      <div className="container-width relative z-10">
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Why Builders Choose Zyder
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              We provide the environment, tools, and culture for you to do your life's best work.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8" delay={0.2}>
          {/* Card 1: Growth */}
          <StaggerItem className="h-full">
            <TiltCard className="group relative h-[500px] rounded-3xl overflow-hidden bg-black border border-white/10">
              <div className="absolute inset-0">
                <img src="/careers_growth_ladder_1766133361659.png" alt="Growth" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Accelerated Growth</h3>
                <p className="text-slate-300 leading-relaxed text-sm">
                  Own high-impact projects from day one. We value trajectory over tenure.
                </p>
              </div>
            </TiltCard>
          </StaggerItem>

          {/* Card 2: Impact */}
          <StaggerItem className="h-full">
            <TiltCard className="group relative h-[500px] rounded-3xl overflow-hidden bg-black border border-white/10">
              <div className="absolute inset-0">
                <img src="/careers_scale_model_detail_1766133386316.png" alt="Impact" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Global Scale</h3>
                <p className="text-slate-300 leading-relaxed text-sm">
                  Your code will optimize routes for millions of shipments across the globe.
                </p>
              </div>
            </TiltCard>
          </StaggerItem>

          {/* Card 3: Culture */}
          <StaggerItem className="h-full">
            <TiltCard className="group relative h-[500px] rounded-3xl overflow-hidden bg-black border border-white/10">
              <div className="absolute inset-0">
                <img src="/careers_culture_glass_room_1766133409380.png" alt="Culture" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Transparent Culture</h3>
                <p className="text-slate-300 leading-relaxed text-sm">
                  No politics, no red tape. Just open communication and a shared mission.
                </p>
              </div>
            </TiltCard>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
