import Link from "next/link";

export default function PlatformCTA() {
  return (
    <section className="py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-900/5 to-transparent pointer-events-none" />
      <div className="container-width text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-8">
          Ready to bring control <br /> to your operations?
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="h-12 px-8 rounded-full bg-white text-black font-semibold flex items-center justify-center hover:bg-slate-200 transition-colors"
          >
            Request a Demo
          </Link>
          <Link
            href="/careers"
            className="h-12 px-8 rounded-full bg-white/5 text-white border border-white/10 font-medium flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            See Open Roles
          </Link>
        </div>
      </div>
    </section>
  );
}
