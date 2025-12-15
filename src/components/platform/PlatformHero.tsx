import Link from "next/link";
import Image from "next/image";

export default function PlatformHero() {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet-900/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <div className="container-width relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-medium text-violet-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              Platform Overview
            </div>

            <h1 className="text-5xl md:text-6xl font-bold font-display leading-tight mb-6">
              A unified control layer for <span className="text-gradient-accent">last-mile ops</span>
            </h1>

            <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-lg">
              Replace fragmented tools, spreadsheets, and manual coordination with one platform built for operational clarity, speed, and scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="h-12 px-8 rounded-full bg-white text-black font-semibold flex items-center justify-center hover:bg-slate-200 transition-colors"
                aria-label="Request Platform Demo"
              >
                Request Demo
              </Link>
              <Link
                href="#modules"
                className="h-12 px-8 rounded-full bg-white/5 text-white border border-white/10 font-medium flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                Explore Modules
              </Link>
            </div>
          </div>

          <div className="relative">
            {/* Abstract UI representation */}
            <div className="relative rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur-md shadow-2xl shadow-violet-900/20 rotate-1 hover:rotate-0 transition-transform duration-700 ease-out">
              <div className="aspect-[4/3] rounded-lg bg-black/50 overflow-hidden relative border border-white/5">
                <Image
                  src="/platform_ui.png"
                  alt="Rostering Module UI"
                  fill
                  className="object-cover"
                />

                {/* Decorative Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 glass-panel p-4 rounded-xl animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Efficiency</div>
                  <div className="text-lg font-bold text-white">+35%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
