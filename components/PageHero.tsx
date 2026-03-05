// Equinox Window Cleaning — PageHero (shared subpage hero with texture)
export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative pt-20 pb-8 sm:pt-24 sm:pb-10 bg-navy noise-overlay overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <p className="font-body text-gold text-xs tracking-[0.2em] uppercase mb-2">
          {eyebrow}
        </p>
        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 max-w-3xl mx-auto">
          {title}
        </h1>
        <p className="font-body text-white/60 text-sm sm:text-base max-w-xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}
