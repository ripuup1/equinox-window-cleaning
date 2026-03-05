// Equinox Window Cleaning — Process
"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "SCRUB",
    description:
      "Max Clean solution applied with professional wand. Breaks down grime at the molecular level.",
  },
  {
    number: "02",
    title: "SQUEEGEE",
    description:
      "Streak-free technique removes every trace of debris-filled water from the glass.",
  },
  {
    number: "03",
    title: "DETAIL",
    description:
      "Microfiber towel wipe-down of edges, frames, and sills. No drips. No residue.",
  },
  {
    number: "04",
    title: "NON-SPOT",
    description:
      "Invisible protective coating applied. Repels water, dirt, and debris. Keeps glass cleaner longer.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!sectionRef.current) return;

      const items = sectionRef.current.querySelectorAll(".process-step");
      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        }
      );
    };

    loadGSAP();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 bg-navy relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Our Non-Spot Process
          </h2>
          <p className="font-body text-white/50 text-lg max-w-xl mx-auto">
            A methodical approach to streak-free perfection.
          </p>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gold/30" />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className="process-step relative flex md:flex-col items-start md:items-center text-left md:text-center gap-5 md:gap-0 opacity-0"
            >
              {/* Step Number Circle */}
              <div className="relative z-10 w-24 h-24 shrink-0 rounded-full border-2 border-gold/40 flex items-center justify-center bg-navy md:mb-6">
                <span className="font-display text-2xl font-bold text-gold">
                  {step.number}
                </span>
              </div>

              {/* Vertical connector (mobile) */}
              {i < steps.length - 1 && (
                <div className="md:hidden absolute left-12 top-24 w-px h-8 bg-gold/30" />
              )}

              {/* Content */}
              <div className="md:px-4">
                <h3 className="font-body text-sm font-semibold text-gold tracking-[0.2em] mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-white/50 text-sm leading-relaxed max-w-[220px] md:mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
