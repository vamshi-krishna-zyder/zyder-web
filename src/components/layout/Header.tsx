"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Magnetic } from "@/components/ui/animation-wrappers";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out flex justify-center",
          isScrolled ? "pt-4" : "pt-6"
        )}
      >
        <div
          className={cn(
            "relative flex items-center justify-between transition-all duration-500 ease-in-out px-6",
            isScrolled
              ? "w-[90%] md:w-fit gap-12 bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] rounded-full py-3"
              : "w-full container-width bg-transparent py-2"
          )}
        >
          {/* Logo */}
          <Magnetic strength={0.2}>
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(124,58,237,0.3)] group-hover:scale-110 transition-transform">
                Z
              </div>
              <span className={cn(
                "text-lg font-bold tracking-tight text-white transition-colors font-display hidden md:block",
                isScrolled ? "group-hover:text-violet-300" : ""
              )}>
                ZYDER
              </span>
            </Link>
          </Magnetic>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {["Platform", "Company", "Careers", "Login"].map((item) => (
              <Magnetic key={item} strength={0.2}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
                >
                  {item}
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-violet-500 rounded-full group-hover:w-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                </Link>
              </Magnetic>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Magnetic>
              <Link
                href="/contact"
                className="relative h-9 px-5 rounded-full bg-white text-black text-sm font-semibold flex items-center justify-center hover:bg-slate-200 transition-all overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-[150%] group-hover:animate-shimmer" />
                <span className="relative z-10">Request Demo</span>
              </Link>
            </Magnetic>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-4 right-4 z-40 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:hidden flex flex-col gap-2 shadow-2xl"
          >
            {["Platform", "Company", "Careers"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-lg font-medium text-slate-300 hover:text-white p-4 rounded-xl hover:bg-white/5 transition-all flex items-center justify-between group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
                <span className="text-violet-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </Link>
            ))}
            <div className="h-px bg-white/10 my-2" />
            <Link
              href="/contact"
              className="w-full h-12 flex items-center justify-center rounded-xl bg-violet-600 text-white font-bold shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:bg-violet-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Request Demo
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
