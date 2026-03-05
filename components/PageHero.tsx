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
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 bg-navy noise-overlay overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

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
        <p className="font-body text-gold text-xs sm:text-sm tracking-[0.25em] uppercase mb-4">
          {eyebrow}
        </p>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 max-w-3xl mx-auto">
          {title}
        </h1>
        <p className="font-body text-white/60 text-lg max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}
