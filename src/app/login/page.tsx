"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Box, CreditCard, LayoutDashboard, Truck, Wallet, Layers, Zap, Globe2, BarChart2, Terminal, ShieldCheck, Activity } from "lucide-react";
import Link from "next/link";
import { FadeIn, Magnetic } from "@/components/ui/animation-wrappers";
import { MouseEvent, useEffect, useState } from "react";

// --- LIVE INTERIORS (MICRO-UI) ---

const FleetRadar = () => (
    <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className="w-32 h-32 rounded-full border border-indigo-500/30 relative">
            <div className="absolute inset-0 rounded-full border border-indigo-500/10 animate-[ping_3s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 w-[1px] h-[50%] bg-gradient-to-b from-indigo-500/50 to-transparent origin-top animate-[spin_4s_linear_infinite]" />
            {/* Blips */}
            <div className="absolute top-8 left-10 w-1 h-1 bg-white rounded-full animate-pulse" />
            <div className="absolute bottom-6 right-8 w-1 h-1 bg-indigo-400 rounded-full animate-pulse delay-700" />
        </div>
    </div>
);

const CoreServer = () => (
    <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex gap-1 items-end h-8 opacity-50">
            {[40, 70, 30, 80, 50, 90, 60].map((h, i) => (
                <div
                    key={i}
                    className="w-1 bg-violet-500 rounded-t-sm animate-pulse"
                    style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
                />
            ))}
        </div>
    </div>
);


// --- QUANTUM STACK (3D EXTRUDED BOXES) ---
const QuantumStack = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 200, mass: 1 }; // Heavy, premium feel
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [25, -25]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-25, 25]), springConfig);

    function onMouseMove(e: MouseEvent<HTMLDivElement>) {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - left) / width - 0.5);
        mouseY.set((e.clientY - top) / height - 0.5);
    }

    function onMouseLeave() {
        mouseX.set(0);
        mouseY.set(0);
    }

    // Extrusion Helper (The "Sides" of the glass)
    // Thickness = 20px
    const SideFace = ({ rot, trans, w, h, brightness = 1 }: any) => (
        <div
            className="absolute rounded-sm bg-white/5 border border-white/5 backdrop-blur-sm"
            style={{
                width: w, height: h,
                transform: `${rot} ${trans}`,
                filter: `brightness(${brightness})`
            }}
        />
    );


    return (
        <div
            className="relative w-[400px] h-[500px] perspective-[1200px] group cursor-pointer"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
        >
            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative w-full h-full flex items-center justify-center"
            >
                {/* --- CARD 1: FINANCE (Bottom) --- */}
                <div className="absolute w-72 h-44 transition-all duration-500 group-hover:translate-y-[80px] group-hover:translate-z-[-40px]"
                    style={{ transform: "translateZ(-40px) translateY(40px) rotateX(10deg) rotateZ(-10deg)", transformStyle: "preserve-3d" }}>

                    {/* Front Face */}
                    <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl" style={{ transform: "translateZ(10px)" }}>

                        {/* CLEAN GLASS - Ticker Removed Here */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-20" />

                        <div className="relative z-10 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-200 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                                <Wallet className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-[10px] uppercase font-mono tracking-widest text-slate-500">Module 01</div>
                                <div className="text-sm font-bold text-slate-200">Finance</div>
                            </div>
                        </div>
                    </div>
                    {/* Thickness (Sides) - Simple approximation */}
                    <div className="absolute bottom-0 left-0 right-0 h-[20px] bg-slate-800/50 transform origin-bottom rotate-x-[-90]" style={{ bottom: '-10px', transform: 'rotateX(-90deg) translateZ(10px)' }} />
                </div>


                {/* --- CARD 2: FLEET (Middle) --- */}
                <div className="absolute w-72 h-44 transition-all duration-500 group-hover:translate-z-[20px]"
                    style={{ transform: "translateZ(0px) rotateX(10deg) rotateZ(-10deg)", transformStyle: "preserve-3d" }}>

                    {/* Front Face */}
                    <div className="absolute inset-0 bg-slate-800/90 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl" style={{ transform: "translateZ(10px)" }}>
                        <FleetRadar />
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-slate-700 flex items-center justify-center text-indigo-400 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                                <Truck className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-[10px] uppercase font-mono tracking-widest text-slate-500">Module 02</div>
                                <div className="text-sm font-bold text-slate-200">Active Fleet</div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* --- CARD 3: CORE (Top) --- */}
                <div className="absolute w-72 h-44 transition-all duration-500 group-hover:translate-y-[-80px] group-hover:translate-z-[80px]"
                    style={{ transform: "translateZ(40px) translateY(-40px) rotateX(10deg) rotateZ(-10deg)", transformStyle: "preserve-3d" }}>

                    {/* Front Face - THICK GLASS */}
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl flex items-center justify-center overflow-hidden shadow-[0_20px_60px_rgba(139,92,246,0.3)] group-hover:shadow-[0_40px_100px_rgba(139,92,246,0.5)] transition-shadow" style={{ transform: "translateZ(10px)" }}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
                        <CoreServer />

                        <div className="relative z-10 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                                <Layers className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-[10px] uppercase font-mono tracking-widest text-violet-200">Unified Core</div>
                                <div className="text-lg font-bold text-white tracking-tight">Zyder Platform</div>
                            </div>
                        </div>
                    </div>
                    {/* 3D Sides for Thick Glass Look */}
                    {/* We can't do full extruded geometry in clean single DOM nodes, keeping it simulated with shadow/layered borders for performance */}
                </div>

            </motion.div>
        </div>
    );
}

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
            <div className="relative z-10 w-full max-w-[1400px] px-8 grid lg:grid-cols-12 gap-16 items-center min-h-[800px]">

                {/* --- LEFT: EDITORIAL COPY --- */}
                <div className="lg:col-span-5 space-y-12 text-center lg:text-left order-2 lg:order-1 pt-12 lg:pt-0">
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
                        <h1 className="text-7xl md:text-8xl lg:text-[7rem] font-bold font-display tracking-tighter text-white leading-[0.85]">
                            Unified. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-slate-200 to-slate-500 opacity-80">
                                Intelligent.
                            </span>
                        </h1>

                        <p className="text-xl text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                            The operating system for modern commerce. <br />
                            Orchestrate <span className="text-white font-medium">Global Fleets</span>, <span className="text-white font-medium">Finance</span>, and <span className="text-white font-medium">Logistics</span> from a single glass pane.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                        <Magnetic strength={0.3}>
                            <Link
                                href="https://portal.zyder.in/login"
                                className="h-16 px-10 rounded-2xl bg-white text-black font-bold text-lg flex items-center justify-center gap-4 hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]"
                            >
                                <span>Initialize Workspace</span>
                                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                            </Link>
                        </Magnetic>

                        <button className="h-16 px-8 rounded-2xl border border-white/10 text-slate-400 font-medium hover:bg-white/5 hover:text-white transition-colors flex items-center justify-center gap-3 uppercase tracking-wider text-xs">
                            <ShieldCheck className="w-4 h-4" />
                            <span>SSO Secure</span>
                        </button>
                    </FadeIn>

                </div>

                {/* --- RIGHT: QUANTUM STACK --- */}
                <div className="lg:col-span-7 flex justify-center lg:justify-end perspective-[2000px] order-1 lg:order-2">
                    <FadeIn delay={0.3} className="relative z-10 scale-[1.1] lg:scale-[1.2]">
                        <QuantumStack />
                    </FadeIn>
                </div>

            </div>
        </section>
    );
}
