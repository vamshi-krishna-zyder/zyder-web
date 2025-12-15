export default function TrustedBy() {
    return (
        <section className="py-12 border-b border-white/5 bg-white/[0.02]">
            <div className="container-width">
                <p className="text-center text-sm font-medium text-slate-500 mb-8 uppercase tracking-wider">
                    Trusted by innovative logistics teams
                </p>
                <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 grayscale opacity-50">
                    {/* Placeholder Logos - In production, use SVG assets */}
                    {["Acme Logistics", "FastTrack", "GlobalMove", "UrbanDispatch", "SwiftFleet"].map((name) => (
                        <div key={name} className="text-xl font-bold font-display text-white">
                            {name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
