import Link from "next/link";

export default function CareersHero() {
  return (
    <section className="pt-32 pb-24 relative overflow-hidden">
      {/* Background Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container-width relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300 mb-6">
            We are hiring
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-8">
            Build the <span className="text-gradient-accent">infrastructure</span> <br />
            that powers real-world logistics.
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
            Join the team building the operating system for last-mile delivery. We solve hard problems for millions of drivers and businesses every day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#open-roles"
              className="h-12 px-8 rounded-full bg-white text-black font-semibold flex items-center justify-center hover:bg-slate-200 transition-colors"
            >
              View Open Roles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
