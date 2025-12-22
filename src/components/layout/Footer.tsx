"use client";

import Link from "next/link";
import { Magnetic, TiltCard } from "@/components/ui/animation-wrappers";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// --- ICONS ---
const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382C17.112 14.198 15.343 13.313 15.011 13.19C14.679 13.067 14.437 13.006 14.195 13.377C13.953 13.748 13.266 14.562 13.056 14.808C12.846 15.056 12.636 15.087 12.276 14.903C11.916 14.719 10.757 14.332 9.383 13.09C8.307 12.116 7.58 10.914 7.37 10.544C7.16 10.174 7.348 9.976 7.528 9.794C7.69 9.63 7.888 9.366 8.068 9.151C8.248 8.935 8.308 8.781 8.428 8.534C8.548 8.288 8.488 8.072 8.398 7.887C8.308 7.702 7.588 5.895 7.288 5.17C6.996 4.464 6.702 4.56 6.479 4.552C6.273 4.545 6.037 4.545 5.801 4.545C5.565 4.545 5.183 4.634 4.862 4.986C4.542 5.337 3.635 6.185 3.635 7.91C3.635 9.635 4.928 11.3 5.108 11.546C5.288 11.792 7.669 15.548 11.417 17.027C14.198 18.125 14.766 17.923 15.367 17.862C16.034 17.794 17.472 17.005 17.773 16.141C18.074 15.277 18.074 14.536 17.984 14.382C17.894 14.228 17.653 14.135 17.293 13.951H17.472V14.382Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.761 24 24 21.761 24 19V5C24 2.239 21.761 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.466 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13.42 10.42 13.42 10.42V19H10.42V8H13.42V9.64C13.42 9.64 14.6 7.683 17.7 7.683C20.8 7.683 20 10.198 20 13.396V19Z" />
  </svg>
);

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99003 21.75H1.68003L9.41003 12.915L1.25403 2.25H8.08003L12.793 8.481L18.244 2.25ZM17.087 19.769H18.917L7.08403 4.126H5.11703L17.087 19.769Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163C15.204 2.163 15.584 2.175 16.849 2.233C18.114 2.291 18.972 2.493 19.723 2.785C20.499 3.087 21.157 3.487 21.815 4.148C22.476 4.806 22.876 5.464 23.178 6.241C23.47 6.991 23.671 7.85 23.729 9.115C23.787 10.379 23.799 10.76 23.799 13.964C23.799 17.168 23.787 17.548 23.729 18.813C23.671 20.078 23.47 20.936 23.178 21.687C22.876 22.463 22.476 23.121 21.815 23.782C21.157 24.441 20.499 24.84 19.723 25.142C18.972 25.434 18.114 25.636 16.849 25.694C15.584 25.752 15.204 25.764 12 25.764C8.796 25.764 8.416 25.752 7.151 25.694C5.886 25.636 5.028 25.434 4.277 25.142C3.501 24.84 2.843 24.441 2.185 23.782C1.524 23.121 1.124 22.463 0.822 21.687C0.53 20.936 0.329 20.078 0.271 18.813C0.213 17.548 0.201 17.168 0.201 13.964C0.201 10.76 0.213 10.379 0.271 9.115C0.329 7.85 0.53 6.991 0.822 6.241C1.124 5.464 1.524 4.806 2.185 4.148C2.843 3.487 3.501 3.087 4.277 2.785C5.028 2.493 5.886 2.291 7.151 2.233C8.416 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C5.775 0.131 4.902 0.334 4.137 0.632C3.346 0.94 2.673 1.346 2.006 2.016C1.336 2.686 0.932 3.359 0.623 4.149C0.325 4.914 0.122 5.787 0.063 7.065C0.005 8.345 0 8.753 0 12.012C0 15.271 0.005 15.68 0.063 16.959C0.122 18.237 0.325 19.11 0.623 19.875C0.932 20.665 1.336 21.338 2.006 22.008C2.673 22.678 3.346 23.084 4.137 23.392C4.902 23.69 5.775 23.893 7.053 23.952C8.333 24.01 8.741 24.024 12 24.024C15.259 24.024 15.667 24.01 16.947 23.952C18.225 23.893 19.098 23.69 19.863 23.392C20.654 23.084 21.327 22.678 21.994 22.008C22.664 21.338 23.068 20.665 23.377 19.875C23.675 19.11 23.878 18.237 23.937 16.959C23.995 15.68 24 15.271 24 12.012C24 8.753 23.995 8.345 23.937 7.065C23.878 5.787 23.675 4.914 23.377 4.149C23.068 3.359 22.664 2.686 21.994 2.016C21.327 1.346 20.654 0.94 19.863 0.632C19.098 0.334 18.225 0.131 16.947 0.072C15.667 0.014 15.259 0 12 0Z" />
    <path d="M12 5.838C8.587 5.838 5.838 8.587 5.838 12C5.838 15.413 8.587 18.162 12 18.162C15.413 18.162 18.162 15.413 18.162 12C18.162 8.587 15.413 5.838 12 5.838ZM12 16C9.791 16 8 14.209 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.209 14.209 16 12 16Z" />
    <path d="M18.406 4.155C17.61 4.155 16.965 4.8 16.965 5.596C16.965 6.392 17.61 7.037 18.406 7.037C19.202 7.037 19.847 6.392 19.847 5.596C19.847 4.8 19.202 4.155 18.406 4.155Z" />
  </svg>
);

const PlayStoreIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.093 0.283C3.903 0.493 3.796 0.771 3.796 1.109V22.892C3.796 23.23 3.903 23.508 4.093 23.718L4.17 23.774L15.337 12.607V11.393L4.17 0.226L4.093 0.283ZM16.038 13.308L20.85 18.119L19.388 20.309L16.038 13.308ZM17.16 11.999L21.458 16.297L21.603 16.425C21.751 16.34 21.821 16.22 21.821 16.082C21.821 15.945 21.751 15.824 21.603 15.739L17.16 11.999ZM16.038 10.691L19.388 3.691L20.85 5.881L16.038 10.691Z" />
  </svg>
);

// --- COMPONENT: RESPONSIVE CARD WRAPPER ---
// Only applies TiltCard on desktop to prevent mobile scrolling issues/overflow
const ResponsiveCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <>
      {/* Mobile: Simple Div (No Tilt) */}
      <div className={cn("block md:hidden h-full rounded-3xl bg-white/5 border border-white/10 overflow-hidden relative", className)}>
        {children}
      </div>

      {/* Desktop: Tilt Card */}
      <div className="hidden md:block h-full">
        <TiltCard className={cn("h-full rounded-3xl bg-white/5 border border-white/10 overflow-hidden relative", className)}>
          {children}
        </TiltCard>
      </div>
    </>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async () => {
    if (!email) return;
    setStatus("loading");
    try {
      await addDoc(collection(db, "newsletter"), {
        email,
        timestamp: serverTimestamp(),
      });
      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <footer className="relative bg-black pt-20 md:pt-32 pb-16 overflow-hidden border-t border-white/5">

      {/* Network Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.1),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none" />

      <div className="container-width relative z-10 px-6">

        {/* LAYOUT: Flex Col on Mobile -> Grid on Desktop */}
        <div className="flex flex-col md:grid md:grid-cols-6 lg:grid-cols-12 gap-6 mb-12">

          {/* 1. BRAND CARD (Span 5) */}
          <div className="md:col-span-6 lg:col-span-5">
            <ResponsiveCard className="p-8 md:p-10 bg-gradient-to-br from-white/5 to-black flex flex-col justify-between">
              <div className="relative z-10">
                <Link href="/" className="inline-flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-violet-600 flex items-center justify-center text-white text-2xl font-bold font-display">Z</div>
                  <span className="text-3xl font-bold text-white tracking-tight font-display">ZYDER</span>
                </Link>
                <p className="text-lg text-slate-300 font-medium leading-relaxed max-w-sm">
                  The unified platform for modern logistics. <br />
                  Connecting fleets, agents, and brands.
                </p>
              </div>

              {/* SOCIAL DOCK */}
              <div className="relative z-10 mt-12 bg-white/5 border border-white/10 rounded-full p-2 flex gap-2 w-fit backdrop-blur-md flex-wrap">
                {[
                  { icon: <WhatsAppIcon />, href: "https://wa.me/918639862034", label: "WhatsApp" },
                  { icon: <LinkedInIcon />, href: "https://www.linkedin.com/company/revsmartx-zyder", label: "LinkedIn" },
                  { icon: <XIcon />, href: "#", label: "X" },
                  { icon: <InstagramIcon />, href: "#", label: "Instagram" },
                  { icon: <PlayStoreIcon />, href: "https://play.google.com/store/apps/details?id=com.revsmartx.zyder&hl=es_419", label: "PlayStore" },
                ].map((social) => (
                  <Magnetic key={social.label} strength={0.3}>
                    <Link
                      href={social.href}
                      className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-violet-600 hover:text-white hover:scale-110 transition-all duration-300 shadow-lg"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </Link>
                  </Magnetic>
                ))}
              </div>
            </ResponsiveCard>
          </div>

          {/* 2. LINKS CARD - PRODUCT (Span 3) */}
          <div className="md:col-span-3 lg:col-span-3">
            <ResponsiveCard className="p-8 md:p-10">
              <h4 className="relative z-10 text-white font-semibold mb-8 text-lg">Platform</h4>
              <ul className="relative z-10 space-y-4">
                {["Intelligence", "Workforce", "Payouts", "API Reference"].map(link => (
                  <li key={link}>
                    <Link href="#" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-base font-medium group/link">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </ResponsiveCard>
          </div>

          {/* 3. LINKS CARD - COMPANY (Span 4) */}
          <div className="md:col-span-3 lg:col-span-4">
            <ResponsiveCard className="p-8 md:p-10">
              <div className="flex justify-between items-start mb-8">
                <h4 className="relative z-10 text-white font-semibold text-lg">Company</h4>
              </div>

              <ul className="relative z-10 space-y-4">
                {["About Us", "Careers", "Blog", "Contact Support"].map(link => (
                  <li key={link}>
                    <Link href="#" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-base font-medium group/link">
                      <span className="w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </ResponsiveCard>
          </div>

          {/* 4. NEWSLETTER (Span 12) */}
          <div className="col-span-12">
            <ResponsiveCard className="p-8 md:p-10 bg-gradient-to-r from-violet-950/20 to-black">
              {/* Gradient Glow */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-violet-600/20 blur-[100px] rounded-full pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-xl text-center md:text-left">
                  <h4 className="text-2xl font-bold text-white mb-2">Stay connected.</h4>
                  <p className="text-slate-400">Join our network for the latest logistics technology updates.</p>
                </div>
                <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
                  {status === "success" ? (
                    <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-6 py-4 rounded-xl flex-1 flex items-center gap-2 w-full md:w-80 justify-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      Subscribed!
                    </div>
                  ) : (
                    <>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === "loading"}
                        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500 transition-colors w-full md:w-80"
                        suppressHydrationWarning
                      />
                      <button
                        onClick={handleSubscribe}
                        disabled={status === "loading"}
                        className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors w-full sm:w-auto disabled:opacity-50"
                        suppressHydrationWarning
                      >
                        {status === "loading" ? "..." : "Subscribe"}
                      </button>
                    </>
                  )}
                </div>
              </div>
            </ResponsiveCard>
          </div>

        </div>

        {/* BOTTOM LEGAL */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-16 py-8 border-t border-white/5 text-sm text-slate-500 font-medium text-center md:text-left">
          <p>© {currentYear} Zyder Inc. All rights reserved.</p>
          <div className="flex gap-4 md:gap-8 flex-wrap justify-center">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Security</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
