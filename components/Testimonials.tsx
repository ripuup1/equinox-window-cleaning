// Equinox Window Cleaning — Testimonials
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Emily R.",
    location: "Cary, NC",
    rating: 5,
    text: "I couldn't believe the difference. My windows looked brand new — and with the Non-Spot coating, they stayed that way for months. The crew was professional, on time, and meticulous. Best cleaning service I've ever used.",
  },
  {
    name: "John S.",
    location: "Raleigh, NC",
    rating: 5,
    text: "We've used three different companies over the years, and Equinox is in a completely different league. They cleaned every window inside and out, detailed the frames, and even pointed out a seal issue we didn't know about. Absolutely worth it.",
  },
  {
    name: "Mark T.",
    location: "Apex, NC",
    rating: 5,
    text: "Quick quote response, fair pricing, and flawless results. They pressure washed our driveway and cleaned all 24 windows in one afternoon. The before-and-after was night and day. Already booked our next appointment.",
  },
  {
    name: "Sarah L.",
    location: "Holly Springs, NC",
    rating: 5,
    text: "I was nervous about having someone clean our second-story windows, but the team was fully insured and incredibly careful. Not a single streak or drip. I recommend them to every neighbor who asks.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Before/after slider drag handling
  const handleMouseMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDragging.current || !sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const position = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(5, Math.min(95, position)));
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleMouseMove);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const t = testimonials[current];

  return (
    <section className="py-20 sm:py-28 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Label */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Testimonial Carousel */}
          <div className="relative">
            {/* Quote Mark */}
            <span className="font-display text-8xl text-gold/20 leading-none absolute -top-6 -left-2 select-none">
              &ldquo;
            </span>

            <div className="relative pl-4 min-h-[280px]">
              {/* Testimonial Content with Fade */}
              <div className="transition-opacity duration-500">
                <p className="font-body text-navy/70 text-lg leading-relaxed mb-8 italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-body font-semibold text-navy">
                      {t.name}
                    </p>
                    <p className="font-body text-navy/50 text-sm">
                      {t.location}
                    </p>
                  </div>
                  <div className="flex gap-0.5 ml-auto">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-gold text-gold"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Dots */}
              <div className="flex gap-2 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? "bg-gold w-6"
                        : "bg-navy/20 hover:bg-navy/40"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Before / After Slider */}
          <div
            ref={sliderRef}
            className="relative h-80 sm:h-96 rounded-2xl overflow-hidden cursor-col-resize select-none"
            onMouseDown={() => { isDragging.current = true; }}
            onTouchStart={() => { isDragging.current = true; }}
            role="slider"
            aria-label="Before and after comparison slider"
            aria-valuenow={Math.round(sliderPosition)}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            {/* "After" Image (full width, bottom layer) */}
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
              alt="Clean, sparkling windows after professional cleaning"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* "Before" Image (clipped) */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80"
                alt="Dirty windows before professional cleaning"
                fill
                className="object-cover brightness-75 contrast-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Before label */}
              <div className="absolute top-4 left-4 bg-navy/80 text-white font-body text-xs px-3 py-1 rounded-full">
                Before
              </div>
            </div>

            {/* After label */}
            <div className="absolute top-4 right-4 bg-gold/90 text-navy font-body text-xs font-semibold px-3 py-1 rounded-full">
              After
            </div>

            {/* Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Handle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="text-navy"
                >
                  <path
                    d="M6 4L2 10L6 16M14 4L18 10L14 16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
