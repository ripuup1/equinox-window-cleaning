// Equinox Window Cleaning — Services
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Sparkles,
  Home,
  ArrowRight,
  Droplets,
  TreePine,
  Footprints,
} from "lucide-react";

const services = [
  {
    title: "Window Cleaning",
    description: "Interior & exterior cleaning with Non-Spot protective coating.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    icon: Sparkles,
  },
  {
    title: "House Washing",
    description: "Soft wash technology that removes grime without damaging siding.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
    icon: Home,
  },
  {
    title: "Driveway Cleaning",
    description: "High-pressure restoration for concrete, pavers, and asphalt.",
    image:
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=600&q=80",
    icon: Droplets,
  },
  {
    title: "Deck & Patio",
    description: "Revive your outdoor living space with deep pressure cleaning.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    icon: TreePine,
  },
  {
    title: "Sidewalk Washing",
    description: "Restore walkways and paths to look brand new.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
    icon: Footprints,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!sectionRef.current) return;

      const cards = sectionRef.current.querySelectorAll(".service-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
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
    <section id="services" ref={sectionRef} className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">
            What We Do Best
          </h2>
          <p className="font-body text-navy/60 text-lg max-w-2xl mx-auto">
            From spotless windows to pristine driveways — we handle the exterior
            so you don&apos;t have to.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="service-card group relative overflow-hidden rounded-2xl h-72 cursor-pointer opacity-0 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Background Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />

                {/* Gold bottom border on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Icon className="text-gold mb-3 w-6 h-6" />
                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    {service.title}
                  </h3>
                  <p className="font-body text-white/60 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 font-body font-semibold text-gold hover:text-gold-dark transition-colors duration-300"
          >
            See All Services <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
