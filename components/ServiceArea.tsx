// Equinox Window Cleaning — ServiceArea
"use client";

import { useEffect, useRef } from "react";
import { MapPin, Phone } from "lucide-react";

interface City {
  name: string;
  isHQ?: boolean;
  // Approximate position in the "map" container (percentage)
  top: string;
  left: string;
}

const cities: City[] = [
  { name: "Durham", top: "15%", left: "35%" },
  { name: "Wake Forest", top: "10%", left: "72%" },
  { name: "Raleigh", top: "40%", left: "65%" },
  { name: "Cary", isHQ: true, top: "48%", left: "42%" },
  { name: "Apex", top: "62%", left: "32%" },
  { name: "Holly Springs", top: "78%", left: "28%" },
  { name: "Fuquay-Varina", top: "85%", left: "52%" },
];

export default function ServiceArea() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!sectionRef.current) return;

      const chips = sectionRef.current.querySelectorAll(".city-chip");
      gsap.fromTo(
        chips,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: "back.out(1.5)",
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
    <section ref={sectionRef} className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-16 max-w-xl">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">
            Proudly Serving the Triangle
          </h2>
          <p className="font-body text-navy/60 text-lg">
            From Holly Springs to Wake Forest, we&apos;re your local window
            cleaning experts.
          </p>
        </div>

        {/* Map Area */}
        <div className="relative max-w-2xl mx-auto h-[400px] sm:h-[450px] mb-12">
          {/* Background shape — abstract Triangle area outline */}
          <div className="absolute inset-8 rounded-[40px] bg-navy/5 border border-navy/10" />

          {/* Decorative connecting lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M35 15 L72 10 L65 40 L42 48 L32 62 L28 78 L52 85"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="0.3"
              strokeDasharray="2 2"
              opacity="0.3"
            />
          </svg>

          {/* City chips */}
          {cities.map((city) => (
            <div
              key={city.name}
              className="city-chip absolute opacity-0"
              style={{ top: city.top, left: city.left, transform: "translate(-50%, -50%)" }}
            >
              {city.isHQ ? (
                <div className="flex flex-col items-center">
                  <div className="bg-gold text-navy font-body font-semibold text-sm px-4 py-2 rounded-full shadow-lg shadow-gold/20 flex items-center gap-1.5">
                    <MapPin size={14} className="fill-navy" />
                    {city.name}
                    <span className="text-[10px] font-bold ml-1 bg-navy text-gold px-1.5 py-0.5 rounded-full">
                      HQ
                    </span>
                  </div>
                  {/* Pulse ring */}
                  <div className="w-3 h-3 bg-gold rounded-full mt-2 animate-pulse" />
                </div>
              ) : (
                <div className="bg-white text-navy font-body text-sm px-3 py-1.5 rounded-full shadow-md border border-navy/10 hover:bg-navy hover:text-white transition-colors duration-300 cursor-default">
                  {city.name}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="font-body text-navy/60 mb-4">
            Don&apos;t see your city? Call us — we likely serve your area.
          </p>
          <a
            href="tel:9842122799"
            className="inline-flex items-center gap-2 font-body font-semibold bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-full transition-colors duration-300"
          >
            <Phone size={18} />
            Call (984) 212-2799
          </a>
        </div>
      </div>
    </section>
  );
}
