import Link from "next/link";
import { Magnetic, TextReveal, BlurReveal } from "@/components/ui/animation-wrappers";

export default function CareersHero() {
  return (
    <section className="pt-32 pb-24 relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Background Abstract Infrastructure Grid */}
      <div className="absolute inset-0 perspective-1000 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 transform rotate-x-12 scale-150" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="container-width relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <BlurReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300 mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              We are hiring builders
            </div>
          </BlurReveal>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-tight mb-8">
            <TextReveal delay={0.1}>Build the</TextReveal> <span className="text-gradient-accent"><TextReveal delay={0.3}>infrastructure</TextReveal></span> <br />
            <TextReveal delay={0.5}>for real-world logistics.</TextReveal>
          </h1>

          <BlurReveal delay={0.6}>
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Join the team building the operating system for last-mile delivery. We solve hard problems for millions of drivers and businesses.
            </p>
          </BlurReveal>

          <BlurReveal delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Magnetic>
                <Link
                  href="#open-roles"
                  className="h-14 px-10 rounded-full bg-white text-black font-bold text-lg flex items-center justify-center hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                  View Open Roles
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  href="/company"
                  className="h-14 px-10 rounded-full bg-white/5 text-white border border-white/10 font-bold text-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  Our Mission
                </Link>
              </Magnetic>
            </div>
          </BlurReveal>
        </div>
      </div>
    </section>
  );
}
