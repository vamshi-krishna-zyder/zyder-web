import Link from "next/link";
import Image from "next/image";
import { Parallax, TextReveal, BlurReveal, Magnetic, TiltCard } from "@/components/ui/animation-wrappers";

export default function PlatformHero() {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden bg-black">
      {/* Cinematic Abstract Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet-900/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />

      <div className="container-width relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <BlurReveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-medium text-violet-300 mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                Platform Overview
              </div>
            </BlurReveal>

            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight">
                <TextReveal delay={0.2}>A unified control layer for</TextReveal> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
                  <TextReveal delay={0.3}>last-mile ops</TextReveal>
                </span>
              </h1>
            </div>

            <BlurReveal delay={0.2}>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-lg">
                Replace fragmented tools, spreadsheets, and manual coordination with one platform built for operational clarity, speed, and scale.
              </p>
            </BlurReveal>

            <BlurReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Magnetic>
                  <Link
                    href="/contact"
                    className="h-12 px-8 rounded-full bg-white text-black font-semibold flex items-center justify-center hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                    aria-label="Request Platform Demo"
                  >
                    Request Demo
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link
                    href="#modules"
                    className="h-12 px-8 rounded-full bg-white/5 text-white border border-white/10 font-medium flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-md"
                  >
                    Explore Modules
                  </Link>
                </Magnetic>
              </div>
            </BlurReveal>
          </div>

          <div className="relative perspective-1000">
            <BlurReveal delay={0.3} duration={0.8}>
              {/* Geometric Glow Behind */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-violet-600/20 blur-[100px] -z-10 rounded-full" />

              {/* Main Visual */}
              <TiltCard className="relative rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-md shadow-2xl shadow-violet-900/20">
                <Parallax offset={20} className="aspect-[4/3] rounded-xl bg-black/50 overflow-hidden relative border border-white/5 group">
                  {/* Fallback to CSS Abstract UI if image fails or for stylistic consistency */}
                  {/* Real Image Overlay */}
                  <div className="relative w-full h-full z-10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/platform_hero_dashboard.png"
                      alt="Rostering Module UI"
                      className="w-full h-full object-cover shadow-2xl"
                    />
                  </div>

                  {/* Reflection Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" />
                </Parallax>
              </TiltCard>
            </BlurReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
