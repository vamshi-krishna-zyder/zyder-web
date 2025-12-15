import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-violet-900/10" />

      <div className="container-width relative text-center">
        <div className="max-w-3xl mx-auto glass-panel p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
            Ready to streamline your operations?
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Join the fastest growing logistics network. Get started with a free trial or schedule a personalized demo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="h-12 px-8 rounded-full bg-white text-black font-semibold flex items-center justify-center hover:bg-slate-200 transition-colors"
            >
              Request Demo
            </Link>
            <Link
              href="/platform"
              className="h-12 px-8 rounded-full bg-white/5 text-white border border-white/10 font-medium flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              Explore Platform
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
