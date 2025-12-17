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
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black p-4 flex flex-col">
                    {/* Abstract Header */}
                    <div className="h-12 border-b border-white/10 flex items-center px-4 gap-4 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                      <div className="ml-auto w-32 h-2 rounded-full bg-white/10" />
                    </div>
                    {/* Abstract Body Content */}
                    <div className="flex-1 flex gap-4">
                      <div className="w-16 bg-white/5 rounded-lg h-full" />
                      <div className="flex-1 space-y-3">
                        <div className="h-32 bg-white/5 rounded-lg w-full relative overflow-hidden">
                          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-violet-500/20 to-transparent" />
                          <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none"><path d="M0 100 Q 50 50 100 80 T 200 40 T 300 60 L 300 130 L 0 130 Z" fill="url(#grad)" opacity="0.3" /></svg>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="h-20 bg-white/5 rounded-lg" />
                          <div className="h-20 bg-white/5 rounded-lg" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Real Image Overlay (if available and loaded) - Using Image Fallback technique */}
                  <Image
                    src="/platform_ui.png"
                    alt="Rostering Module UI"
                    fill
                    className="object-cover transition-opacity duration-500 opacity-90 hover:opacity-100 mix-blend-lighten"
                  />

                  {/* Reflection Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" />
                </Parallax>
              </TiltCard>

              {/* Floating Badge */}
              <Parallax offset={40} className="absolute -bottom-8 -left-8 z-20">
                <div className="glass-panel p-5 rounded-2xl animate-bounce-slow border border-white/10 shadow-xl bg-black/80 backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-0.5">Efficiency</div>
                      <div className="text-2xl font-bold text-white">+35%</div>
                    </div>
                  </div>
                </div>
              </Parallax>
            </BlurReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
