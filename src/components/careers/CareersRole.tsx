const roles = [
  {
    title: "Senior Full Stack Engineer",
    team: "Engineering",
    location: "Bangalore",
    type: "Full-time"
  },
  {
    title: "Product Designer",
    team: "Design",
    location: "Remote",
    type: "Full-time"
  },
  {
    title: "Backend Engineer (Go/Node)",
    team: "Engineering",
    location: "Bangalore",
    type: "Full-time"
  },
  {
    title: "Operations Manager",
    team: "Operations",
    location: "Mumbai",
    type: "Full-time"
  },
];

import { StaggerContainer, StaggerItem, FadeIn } from "@/components/ui/animation-wrappers";

export default function CareersRoles() {
  return (
    <section id="open-roles" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-violet-600/5 blur-[100px] -z-10 rounded-full pointer-events-none" />

      <div className="container-width relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Open Roles</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-400">
              Ready to define the future of logistics? Find your role.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="max-w-4xl mx-auto space-y-4" delay={0.3}>
          {roles.map((role, i) => (
            <StaggerItem key={i}>
              <div
                className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/50 hover:bg-white/[0.07] transition-all cursor-pointer shadow-sm hover:shadow-lg hover:shadow-violet-900/10"
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">{role.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-slate-400">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m8-2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                      {role.team}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-600" />
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      {role.location}
                    </span>
                  </div>
                </div>

                <div className="mt-4 md:mt-0 flex items-center gap-4">
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-slate-300 border border-white/5">
                    {role.type}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-violet-500 group-hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
