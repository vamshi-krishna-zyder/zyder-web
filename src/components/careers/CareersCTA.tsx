export default function CareersCTA() {
  return (
    <section className="py-24 border-t border-white/5 bg-white/[0.02]">
      <div className="container-width text-center">
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
          Don't see your role?
        </h2>

        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
          We are always looking for exceptional talent. If you think you can help us build the next generation of logistics, say hello.
        </p>

        <a
          href="mailto:careers@zyder.in"
          className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-white text-black font-semibold hover:bg-slate-200 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Email us at careers@zyder.in
        </a>
      </div>
    </section>
  );
}
