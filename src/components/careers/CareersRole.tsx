"use client";

import { useState } from "react";
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/ui/animation-wrappers";
import { ArrowUpRight, MapPin, Clock, Code2, PenTool, Layout, BarChart3, Globe, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Helper icon mapping if needed, or just use the object
const Database = Layout; // Placeholder using Layout if Database icon missing or just generic

const roles = [
  {
    id: "ENG-01",
    title: "Senior Full Stack Engineer",
    team: "Engineering",
    location: "Hyderabad",
    type: "Full-time",
    icon: Code2
  },
  {
    id: "DES-01",
    title: "Product Designer",
    team: "Design",
    location: "Hyderabad",
    type: "Full-time",
    icon: PenTool
  },
  {
    id: "ENG-02",
    title: "Backend Engineer (Go/Node)",
    team: "Engineering",
    location: "Hyderabad",
    type: "Full-time",
    icon: Database
  },
  {
    id: "OPS-01",
    title: "Operations Manager",
    team: "Operations",
    location: "Hyderabad",
    type: "Full-time",
    icon: BarChart3
  },
];

const categories = ["All", "Engineering", "Design", "Operations"];

export default function CareersRoles() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredRoles = activeCategory === "All"
    ? roles
    : roles.filter(r => r.team === activeCategory);

  return (
    <section id="open-roles" className="py-32 bg-black relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-900/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="container-width relative z-10">

        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <FadeIn>
            <span className="text-violet-500 font-mono text-xs tracking-[0.2em] uppercase mb-4 block">
              // Join The Network
            </span>
            <h2 className="text-5xl md:text-7xl font-bold font-display text-white tracking-tighter">
              Open <br />
              <span className="text-slate-500">Positions</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} className="flex gap-2 overflow-x-auto pb-4 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                suppressHydrationWarning
                className={`
                  px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                  ${activeCategory === cat
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-slate-400 border-white/10 hover:border-white/30 hover:text-white"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </FadeIn>
        </div>

        {/* Roles List */}
        <div className="min-h-[400px]">
          <StaggerContainer className="space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredRoles.map((role) => (
                <motion.a
                  href={`mailto:info@zyder.in?subject=Application for ${role.title} (${role.id})`}
                  key={role.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="block"
                >
                  <div className="group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 cursor-pointer">

                    {/* Hover Gradient Shine */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                    <div className="relative p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center justify-between">

                      {/* Role Info */}
                      <div className="flex items-start gap-6">
                        {/* Icon Box */}
                        <div className="hidden md:flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/5 group-hover:border-violet-500/30 group-hover:from-violet-500/10 transition-colors duration-500">
                          <role.icon className="w-6 h-6 text-slate-400 group-hover:text-violet-400 transition-colors" />
                        </div>

                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-[10px] font-mono text-slate-500 border border-white/10 px-2 py-0.5 rounded uppercase tracking-wider">
                              {role.id}
                            </span>
                            <span className="text-violet-500 text-[10px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">
                              Apply Now
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-violet-200 transition-colors">
                            {role.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                            <span className="flex items-center gap-1.5">
                              <Users className="w-3.5 h-3.5" />
                              {role.team}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-slate-700" />
                            <span className="flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5" />
                              {role.location}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-slate-700" />
                            <span className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5" />
                              {role.type}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Action Arrow */}
                      <div className="flex items-center justify-between md:justify-end w-full md:w-auto mt-4 md:mt-0 pt-4 md:pt-0 border-t border-white/5 md:border-t-0">
                        <span className="md:hidden text-sm font-medium text-white">View Role</span>
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:border-transparent transition-all duration-300 transform group-hover:rotate-45">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </StaggerContainer>

          {/* Empty State */}
          {filteredRoles.length === 0 && (
            <div className="py-20 text-center border border-dashed border-white/10 rounded-2xl">
              <p className="text-slate-500 mb-2">No open positions in {activeCategory}.</p>
              <button onClick={() => setActiveCategory("All")} className="text-violet-400 hover:text-violet-300 text-sm underline">
                View all roles
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
