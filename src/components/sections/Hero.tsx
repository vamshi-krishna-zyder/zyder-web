import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[100px]" />
        <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px]" />
      </div>

      <div className="container-width relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-violet-300 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            Now available in Beta
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 font-display">
            The Operating System for <br />
            <span className="text-gradient-accent">Last-Mile Delivery</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
            Unify your entire logistics stack. Manage workforce, automate payouts,
            and visualize real-time analytics in one powerful control layer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="h-12 px-8 rounded-full bg-white text-black font-semibold flex items-center justify-center hover:bg-slate-200 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              href="/platform"
              className="h-12 px-8 rounded-full bg-white/5 text-white border border-white/10 font-medium flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              View Platform
            </Link>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-20 relative mx-auto max-w-5xl">
          <div className="rounded-xl bg-gradient-to-b from-white/10 to-white/5 p-1 backdrop-blur-sm">
            <div className="rounded-lg bg-black/80 aspect-[16/9] overflow-hidden border border-white/10 relative shadow-2xl">
              <Image
                src="/hero_dashboard_wide_169.png"
                alt="Zyder Dashboard"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Decorative Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-20 blur-2xl -z-10 rounded-xl" />
        </div>
      </div>
    </section>
  );
}
