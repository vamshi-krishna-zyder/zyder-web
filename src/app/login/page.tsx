"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Box, CreditCard, LayoutDashboard, Truck, Wallet, Layers, Zap, Globe2, BarChart2, Terminal, ShieldCheck, Activity } from "lucide-react";
import Link from "next/link";
import { FadeIn, Magnetic } from "@/components/ui/animation-wrappers";
import { MouseEvent, useEffect, useState } from "react";

// --- HOLOGRAPHIC COMMAND NODE (MICRO-UI) ---
const HolographicCore = () => {
    return (
        <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] flex items-center justify-center">
            {/* Outer Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

            {/* Ring 1: Data Stream */}
            <div className="absolute inset-0 rounded-full border border-white/5 border-l-white/20 animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-[10%] rounded-full border border-dashed border-white/5 animate-[spin_40s_linear_infinite_reverse]" />

            {/* Ring 2: Active Sector */}
            <div className="absolute inset-[25%] rounded-full border border-violet-500/20 border-t-violet-400/50 shadow-[0_0_30px_rgba(139,92,246,0.1)] animate-[spin_15s_linear_infinite]" />

            {/* Core Module */}
            <div className="relative w-32 h-32 md:w-48 md:h-48 bg-black/40 backdrop-blur-xl rounded-full border border-white/10 flex items-center justify-center shadow-[0_0_100px_rgba(139,92,246,0.3)] group cursor-pointer hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/10 to-transparent" />
                <div className="relative z-10 flex flex-col items-center gap-2">
                    <Layers className="w-8 h-8 text-white animate-pulse" />
                    <div className="text-[10px] uppercase tracking-widest text-violet-300 font-mono">Zyder</div>
                </div>
            </div>

            {/* Orbiting Satellite */}
            <div className="absolute inset-[25%] animate-[spin_8s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-6 h-6 bg-slate-950 border border-slate-700 rounded-md flex items-center justify-center shadow-lg">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                </div>
            </div>

            {/* Floating Code Snippets (Decorative) */}
            <div className="absolute top-[20%] right-[10%] text-[10px] font-mono text-slate-600 opacity-50 hidden md:block">
                Wait_Signal(FLT_01);
            </div>
            <div className="absolute bottom-[20%] left-[10%] text-[10px] font-mono text-slate-600 opacity-50 hidden md:block">
                Sync_Node(ACK);
            </div>

        </div>
    );
};

// --- BACKGROUND ATMOSPHERE (VOLUMETRIC) ---
const Atmosphere = () => (
    <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep Space Void */}
        <div className="absolute inset-0 bg-[#020005]" />

        {/* Volumetric Fog Layers */}
        <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-violet-900/10 rounded-full blur-[150px] mix-blend-screen animate-drift-slow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[150px] mix-blend-screen animate-drift-slow duration-700" />

        {/* Cinematic Noise */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150 mix-blend-overlay" />

        {/* Horizon Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-violet-950/20 to-transparent" />
    </div>
);


export default function LoginPage() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden font-sans selection:bg-violet-500/30 group">

            <Atmosphere />

            {/* Main Content Grid */}
            <div className="relative z-10 w-full max-w-[1400px] px-8 grid xl:grid-cols-12 gap-8 md:gap-16 items-center min-h-svh md:min-h-[800px]">

                {/* --- LEFT: EDITORIAL COPY --- */}
                <div className="xl:col-span-5 space-y-8 md:space-y-12 text-center xl:text-left order-1 pt-4 md:pt-12 xl:pt-0">
                    <FadeIn delay={0.2} className="space-y-6">

                        {/* Tech Badge */}
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm">
                            <span className="flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-[11px] font-mono tracking-[0.2em] text-slate-300 uppercase">System Operational</span>
                        </div>

                        {/* Massive Headline */}
                        {/* MOBILE FIX: Reduced text-7xl to text-5xl for mobile safety */}
                        <h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-[7rem] font-bold font-display tracking-tighter text-white leading-[0.85]">
                            Unified <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-slate-200 to-slate-500 opacity-80">
                                Intelligent
                            </span>
                        </h1>

                        <p className="text-xl text-slate-400 max-w-lg mx-auto xl:mx-0 leading-relaxed font-light">
                            The Operating System For Modern Commerce. <br />
                            Orchestrate <span className="text-white font-medium">Global Fleets</span>, <span className="text-white font-medium">Finance</span>, and <span className="text-white font-medium">Logistics</span> from a single glass pane.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center xl:justify-start">
                        <Magnetic strength={0.3}>
                            <Link
                                href="https://portal.zyder.in/login"
                                className="h-14 md:h-16 px-8 md:px-10 rounded-2xl bg-white text-black font-bold text-lg flex items-center justify-center gap-4 hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]"
                            >
                                <span>Initialize Workspace</span>
                                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                            </Link>
                        </Magnetic>

                        <button className="h-14 md:h-16 px-6 md:px-8 rounded-2xl border border-white/10 text-slate-400 font-medium hover:bg-white/5 hover:text-white transition-colors flex items-center justify-center gap-3 uppercase tracking-wider text-xs">
                            <ShieldCheck className="w-4 h-4" />
                            <span>SSO Secure</span>
                        </button>
                    </FadeIn>

                </div>

                {/* --- RIGHT: HOLOGRAPHIC CORE --- */}
                {/* Now visible on mobile thanks to responsive CSS sizing */}
                <div className="flex xl:col-span-7 justify-center xl:justify-end order-2 items-center">
                    <FadeIn delay={0.3} className="relative z-10 w-full flex justify-center">
                        <HolographicCore />
                    </FadeIn>
                </div>

            </div>
        </section>
    );
}
