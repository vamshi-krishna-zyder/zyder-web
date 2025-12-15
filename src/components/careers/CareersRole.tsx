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

export default function CareersRoles() {
  return (
    <section id="open-roles" className="py-24">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Open Roles</h2>
          <p className="text-xl text-slate-400">
            Ready to define the future of logistics? Find your role.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {roles.map((role, i) => (
            <div
              key={i}
              className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/50 hover:bg-white/[0.07] transition-all cursor-pointer"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">{role.title}</h3>
                <div className="flex items-center gap-4 text-sm text-slate-400">
                  <span>{role.team}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-600" />
                  <span>{role.location}</span>
                </div>
              </div>

              <div className="mt-4 md:mt-0 flex items-center gap-4">
                <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-slate-300 border border-white/5">
                  {role.type}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-500 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
