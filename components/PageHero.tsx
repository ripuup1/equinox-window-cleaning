// Equinox Window Cleaning — PageHero (shared subpage hero with background image)
import Image from "next/image";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section className="relative pt-28 pb-14 sm:pt-36 sm:pb-20 overflow-hidden">
      {/* Background Image */}
      <Image
        src={image}
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/60" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <p className="font-body text-gold text-xs tracking-[0.2em] uppercase mb-3">
          {eyebrow}
        </p>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 max-w-3xl mx-auto">
          {title}
        </h1>
        <p className="font-body text-white/70 text-base sm:text-lg max-w-xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}
