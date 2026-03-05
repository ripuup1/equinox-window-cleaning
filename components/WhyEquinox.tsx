// Equinox Window Cleaning — WhyEquinox
"use client";

import { useEffect, useRef } from "react";

const pillars = [
  {
    number: "01",
    title: "Non-Spot Technology",
    description:
      "An invisible coating bonds to your glass after every clean, repelling water and debris 3x longer than standard cleaning.",
  },
  {
    number: "02",
    title: "Fully Insured",
    description:
      "Sleep easy knowing we carry $1M per occurrence / $2M aggregate coverage. Your home is protected.",
  },
  {
    number: "03",
    title: "Satisfaction Guaranteed",
    description:
      "We don't leave until you're happy. Period. If it's not right, we come back.",
  },
];

export default function WhyEquinox() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!sectionRef.current) return;

      const items = sectionRef.current.querySelectorAll(".pillar-item");
      gsap.fromTo(
        items,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    };

    loadGSAP();
  }, []);

  return (
    <section
      id="why-equinox"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-cream"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">
            Why Equinox
          </h2>
          <p className="font-body text-navy/60 text-lg max-w-xl mx-auto">
            Three promises that set us apart from every other cleaning company.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="pillar-item flex gap-6 opacity-0">
              {/* Large Number */}
              <span className="font-display text-6xl sm:text-7xl font-bold text-gold/20 leading-none shrink-0">
                {pillar.number}
              </span>

              {/* Content */}
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-navy mb-3">
                  {pillar.title}
                </h3>
                <p className="font-body text-navy/60 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
