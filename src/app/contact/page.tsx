"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate network delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1000));

    const formData = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      setSuccess(true);
    } else {
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  }

  if (success) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center pt-20">
        <div className="text-center max-w-lg mx-auto p-12 glass-panel rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-violet-500 to-indigo-500" />
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 text-green-500 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold mb-4 font-display text-white">Request received</h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Thanks for your interest in Zyder. Our team will get back to you within 24 hours to schedule your personalized walkthrough.
          </p>
          <div className="mt-8 pt-8 border-t border-white/5">
            <button onClick={() => setSuccess(false)} className="text-sm text-violet-400 hover:text-violet-300 transition-colors">
              Send another request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-32 pb-20 relative overflow-hidden flex items-center">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Context & Social Proof */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-medium text-violet-300 mb-8">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              Book a Demo
            </div>

            <h1 className="text-5xl md:text-6xl font-bold font-display leading-tight mb-8">
              See Zyder in <span className="text-gradient-accent">action</span>
            </h1>

            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              Experience how our unified control layer can transform your last-mile operations. Book a personalized demo to see:
            </p>

            <ul className="space-y-6 mb-12">
              {[
                { title: "Live Dashboard Tour", desc: "See real-time tracking and rostering workflows." },
                { title: "Payout Automation", desc: "Watch how we calculate and settle rider earnings instantly." },
                { title: "Custom Onboarding", desc: "Discuss how Zyder fits your specific fleet requirements." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 pt-8 border-t border-white/5">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-slate-800 border-2 border-[#030712] flex items-center justify-center text-xs text-slate-500">
                    {/* Avatar Placeholder */}
                    <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 rounded-full" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-400">Trusted by <span className="text-white font-semibold">50+ logistics teams</span></p>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 to-transparent blur-xl -z-10 rounded-3xl" />

            <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-10 rounded-3xl space-y-6 border border-white/10 shadow-2xl shadow-black/50">
              <div className="mb-2">
                <h3 className="text-2xl font-bold font-display text-white">Get started</h3>
                <p className="text-slate-400 text-sm">Fill in your details and we'll handle the rest.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Full Name</label>
                  <input
                    name="name"
                    required
                    className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3.5 text-white focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-slate-700"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Company Name</label>
                  <input
                    name="company"
                    required
                    className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3.5 text-white focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-slate-700"
                    placeholder="Acme Logistics"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Work Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3.5 text-white focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-slate-700"
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Your Role</label>
                <select
                  name="role"
                  defaultValue=""
                  className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3.5 text-white focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all text-slate-300"
                >
                  <option value="" disabled>Select your role</option>
                  <option value="founder">Founder / CXO</option>
                  <option value="ops_manager">Operations Manager</option>
                  <option value="product">Product Manager</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Anything specific?</label>
                <textarea
                  name="message"
                  rows={3}
                  className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3.5 text-white focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-slate-700 resize-none"
                  placeholder="Tell us about your biggest operational pain point..."
                />
              </div>

              {error && (
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-white text-black px-6 py-4 text-sm font-bold hover:bg-slate-200 transition-colors disabled:opacity-50 flex items-center justify-center shadow-lg shadow-white/5"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                    Sending Request...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Schedule Demo
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                )}
              </button>

              <p className="text-center text-xs text-slate-500 pt-2">
                No credit card required. Free pilot available for qualified teams.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
