// Equinox Window Cleaning — CTABanner
"use client";

import { useEffect, useRef } from "react";

export default function CTABanner() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!sectionRef.current) return;

      gsap.fromTo(
        sectionRef.current.querySelectorAll(".cta-fade"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    };

    loadGSAP();
  }, []);

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-navy noise-overlay"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="cta-fade font-body text-gold text-xs sm:text-sm tracking-[0.25em] uppercase mb-4 opacity-0">
          Ready for Crystal-Clear Windows?
        </p>

        <h2 className="cta-fade font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 opacity-0">
          Get Your Free Quote in 24 Hours
        </h2>

        <p className="cta-fade font-body text-white/50 text-lg mb-10 max-w-lg mx-auto opacity-0">
          No commitment. No pressure. Just spotless results and honest pricing.
        </p>

        <div className="cta-fade opacity-0">
          <a
            href="mailto:Info@equinoxnc.net?subject=Free%20Quote%20Request"
            className="inline-block font-body font-semibold bg-gold hover:bg-gold-light text-navy px-10 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:shadow-gold/25"
          >
            Request a Free Estimate
          </a>
        </div>

        <p className="cta-fade font-body text-white/40 text-sm mt-6 opacity-0">
          Or call us directly:{" "}
          <a
            href="tel:9842122799"
            className="text-white/60 hover:text-gold transition-colors duration-300 underline underline-offset-2"
          >
            (984) 212-2799
          </a>
        </p>
      </div>
    </section>
  );
}
