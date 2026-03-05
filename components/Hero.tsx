// Equinox Window Cleaning — Hero
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect on scroll
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollY = window.scrollY;
        imageRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // GSAP word-by-word animation
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!contentRef.current) return;

      const words = contentRef.current.querySelectorAll(".hero-word");
      const elements = contentRef.current.querySelectorAll(".hero-fade");

      gsap.fromTo(
        words,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.3,
        }
      );

      gsap.fromTo(
        elements,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          delay: 1.0,
        }
      );
    };

    loadGSAP();
  }, []);

  const headlineWords = ["Crystal", "Clear", "Windows.", "Every", "Time."];

  return (
    <section
      ref={heroRef}
      className="relative h-screen min-h-[700px] flex items-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div ref={imageRef} className="absolute inset-0 -top-20 -bottom-20">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt="Pristine modern home exterior with clean windows"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-7xl mx-auto px-6 w-full"
      >
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="hero-fade font-body text-sky text-xs sm:text-sm tracking-[0.25em] uppercase mb-6 opacity-0">
            North Carolina&apos;s Premium Window Cleaning
          </p>

          {/* Headline — word by word */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            {headlineWords.map((word, i) => (
              <span key={i} className="hero-word inline-block mr-3 opacity-0">
                {word}
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          <p className="hero-fade font-body text-white/70 text-base sm:text-lg max-w-lg mb-8 leading-relaxed opacity-0">
            Serving Cary, Raleigh, and the Triangle since day one. Backed by
            Non-Spot Technology and a 100% satisfaction guarantee.
          </p>

          {/* CTAs */}
          <div className="hero-fade flex flex-wrap gap-4 mb-8 opacity-0">
            <a
              href="#cta"
              className="font-body font-semibold bg-gold hover:bg-gold-light text-navy px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold/25 text-sm sm:text-base inline-flex items-center gap-2"
            >
              Get a Free Quote
              <span aria-hidden="true">&rarr;</span>
            </a>
            <a
              href="#services"
              className="font-body font-semibold border-2 border-white/30 hover:border-white text-white px-8 py-3.5 rounded-full transition-all duration-300 text-sm sm:text-base"
            >
              Our Services
            </a>
          </div>

          {/* Trust Badges */}
          <div className="hero-fade flex flex-wrap items-center gap-6 text-white/60 font-body text-xs sm:text-sm opacity-0">
            <span className="flex items-center gap-2">
              <span className="text-gold">&#10022;</span> Fully Insured
            </span>
            <span className="flex items-center gap-2">
              <span className="text-gold">&#10022;</span> Free 24hr Estimates
            </span>
            <span className="flex items-center gap-2">
              <span className="text-gold">&#10022;</span> 5-Star Rated
            </span>
          </div>
        </div>
      </div>

      {/* Bottom fade for smooth transition to StatBar */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy to-transparent" />
    </section>
  );
}
