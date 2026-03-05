// Equinox Window Cleaning — StatBar
"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 500, suffix: "+", label: "Windows Cleaned" },
  { value: 4.9, suffix: "★", label: "Google Rating" },
  { prefix: "$", value: 2, suffix: "M", label: "Insurance Coverage" },
  { value: 24, suffix: "hr", label: "Quote Turnaround" },
];

function AnimatedCounter({
  value,
  prefix = "",
  suffix,
  triggered,
}: {
  value: number;
  prefix?: string;
  suffix: string;
  triggered: boolean;
}) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!triggered || hasAnimated.current) return;
    hasAnimated.current = true;

    const isDecimal = value % 1 !== 0;
    const duration = 2000;
    const totalSteps = 60;
    const increment = value / totalSteps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current += increment;
      if (step >= totalSteps) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      }
    }, duration / totalSteps);

    return () => clearInterval(timer);
  }, [triggered, value]);

  return (
    <span className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tabular-nums">
      {prefix}
      {value % 1 !== 0 ? count.toFixed(1) : count}
      {suffix}
    </span>
  );
}

export default function StatBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-navy py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center ${
                i < stats.length - 1
                  ? "lg:border-r lg:border-gold/20"
                  : ""
              }`}
            >
              <AnimatedCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                triggered={triggered}
              />
              <span className="font-body text-white/50 text-sm mt-2 tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
