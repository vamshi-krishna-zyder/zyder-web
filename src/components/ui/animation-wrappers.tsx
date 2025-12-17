"use client";

import { motion, useScroll, useTransform, useSpring, useMotionTemplate, useMotionValue, MotionProps, Easing, useVelocity } from "framer-motion";
import { useRef, ReactNode, MouseEvent, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// --- Constants ---
const EASE_PREMIUM: Easing = [0.25, 0.1, 0.25, 1]; // Faster, snappier easing

// --- Fade In ---
interface FadeInProps extends MotionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    duration?: number;
    fullWidth?: boolean;
}

export function FadeIn({
    children,
    className,
    delay = 0,
    direction = "up",
    duration = 0.5,
    fullWidth = false,
    ...props
}: FadeInProps) {
    const directions = {
        up: { y: 20 },
        down: { y: -20 },
        left: { x: 20 },
        right: { x: -20 },
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...directions[direction] }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: "-10px" }} // Trigger earlier
            transition={{ duration, delay, ease: EASE_PREMIUM }}
            className={cn(fullWidth ? "w-full" : "", className)}
            {...props}
        >
            {children}
        </motion.div>
    );
}

// --- Stagger Container ---
export function StaggerContainer({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10px" }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: 0.05, // Faster stagger
                        delayChildren: delay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_PREMIUM } },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// --- Parallax ---
export function Parallax({ children, className, offset = 50 }: { children: ReactNode; className?: string; offset?: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
    // Add simple spring to smooth out the parallax
    const ySpring = useSpring(y, { stiffness: 100, damping: 30, restDelta: 0.001 });

    return (
        <div ref={ref} className={cn("relative overflow-hidden", className)}>
            <motion.div style={{ y: ySpring }} className="w-full h-full">
                {children}
            </motion.div>
        </div>
    );
}

// --- Spotlight Card ---
export function SpotlightCard({ children, className = "", spotlightColor = "rgba(139, 92, 246, 0.15)" }: { children: ReactNode; className?: string; spotlightColor?: string }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={cn(
                "group relative border border-white/10 bg-white/5 overflow-hidden rounded-xl",
                className
            )}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
                }}
            />
            <div className="relative h-full">{children}</div>
        </div>
    );
}
// --- Text Reveal (Staggered Words) ---
export function TextReveal({ children, className, delay = 0 }: { children: string; className?: string; delay?: number }) {
    const words = children.split(" ");
    return (
        <span className={cn("inline-block", className)}>
            <span className="sr-only">{children}</span>
            {words.map((word, i) => (
                <span key={i} className="inline-block whitespace-nowrap mr-[0.25em] overflow-hidden align-bottom">
                    <motion.span
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: delay + i * 0.02, ease: [0.33, 1, 0.68, 1] }}
                        className="inline-block"
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}

// --- Blur Reveal (Cinematic, No Float) ---
export function BlurReveal({ children, className, delay = 0, duration = 0.5 }: { children: ReactNode; className?: string; delay?: number; duration?: number }) {
    return (
        <motion.span
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={cn("inline-block", className)}
        >
            {children}
        </motion.span>
    );
}

// --- Magnetic Button ---
export function Magnetic({ children, strength = 30 }: { children: ReactNode; strength?: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const position = { x: useMotionValue(0), y: useMotionValue(0) };

    function handleMouseMove(e: MouseEvent) {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        position.x.set(x * (strength / 100));
        position.y.set(y * (strength / 100));
    }

    function handleMouseLeave() {
        position.x.set(0);
        position.y.set(0);
    }

    const { x, y } = position;
    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    );
}

// --- 3D Tilt Card ---
export function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [5, -5]);
    const rotateY = useTransform(x, [-100, 100], [-5, 5]);

    function handleMouseMove(e: MouseEvent) {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct * 200);
        y.set(yPct * 200);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className={cn("perspective-1000", className)}
        >
            {children}
        </motion.div>
    );
}

// --- Scale In ---
export function ScaleIn({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10px" }}
            transition={{ duration: 0.4, delay, ease: EASE_PREMIUM }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// --- Velocity Scroll (Physics Skew) ---
export function VelocityScroll({ children, className, maxSkew = 15 }: { children: ReactNode; className?: string; maxSkew?: number }) {
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const skew = useTransform(scrollVelocity, [-1000, 1000], [-maxSkew, maxSkew]);
    const smoothSkew = useSpring(skew, { stiffness: 400, damping: 30 }); // Physics feel

    return (
        <motion.div style={{ skewX: smoothSkew }} className={className}>
            {children}
        </motion.div>
    );
}

// --- Text Scramble (Data Decoding) ---
export function TextScramble({ children, className, delay = 0 }: { children: string; className?: string; delay?: number }) {
    const [displayText, setDisplayText] = useState("");
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

    useEffect(() => {
        let iteration = 0;
        let interval: NodeJS.Timeout;
        const controls = setTimeout(() => {
            interval = setInterval(() => {
                setDisplayText(
                    children
                        .split("")
                        .map((char, index) => {
                            if (index < iteration) return children[index];
                            return chars[Math.floor(Math.random() * chars.length)];
                        })
                        .join("")
                );

                if (iteration >= children.length) {
                    clearInterval(interval);
                }

                iteration += 0.5; // Controls speed (1/2 letter per frame-ish)
            }, 30);
        }, delay * 1000);

        return () => {
            clearTimeout(controls);
            clearInterval(interval);
        }
    }, [children, delay]);

    return (
        <motion.span
            className={cn("inline-block tabular-nums", className)} // tabular-nums prevents jitter
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            {displayText || children}
        </motion.span>
    );
}

// --- Hero Parallax Zoom (3D Perspective) ---
export function HeroParallax({ children, className }: { children: ReactNode; className?: string }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // 3D Transform values
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const rotateX = useTransform(scrollYProgress, [0, 1], [0, 20]); // Tilts back as it leaves

    return (
        <div ref={ref} className={cn("perspective-1000 w-full h-full", className)}>
            <motion.div style={{ scale, opacity, rotateX, transformStyle: "preserve-3d" }} className="w-full h-full origin-bottom">
                {children}
            </motion.div>
        </div>
    );
}
// --- Sticky Scroll Reveal (Card Stacking) ---
export function StickyScrollReveal({ children, className }: { children: ReactNode; className?: string }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.1], [0.5, 1]); // Quick fade in

    return (
        <motion.div ref={ref} style={{ scale, opacity }} className={className}>
            {children}
        </motion.div>
    );
}

// --- Cinematic Grain Overlay ---
export function GrainOverlay() {
    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-overlay">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat brightness-100 contrast-150 animate-grain" />
        </div>
    );
}
