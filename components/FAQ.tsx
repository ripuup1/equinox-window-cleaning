// Equinox Window Cleaning — FAQ
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does a window cleaning appointment take?",
    answer:
      "Most residential jobs take between 1.5 to 3 hours depending on the size of your home and the number of windows. A standard 20-window home typically takes about 2 hours. We'll give you a time estimate when we provide your free quote so you can plan accordingly.",
  },
  {
    question: "What is Non-Spot Technology and do I need it?",
    answer:
      "Non-Spot Technology is an invisible protective coating we apply to your glass after every clean. It bonds at the surface level to repel water, dirt, dust, and pollen — keeping your windows cleaner up to 3x longer than a standard wash. It's included in our premium service package and highly recommended for homeowners who want lasting results between cleanings.",
  },
  {
    question: "Are you insured?",
    answer:
      "Absolutely. We carry $1 million per occurrence and $2 million aggregate general liability insurance. Every team member is covered, and we're happy to provide a certificate of insurance upon request. Your home and property are fully protected when you work with Equinox.",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer:
      "Not necessarily. For exterior-only cleaning, you don't need to be home at all — just make sure we have access to the areas we need to clean. For interior window cleaning, we'll need someone to let us in. Many clients leave a key or provide a garage code. We'll always notify you before we arrive and when we're finished.",
  },
  {
    question: "How often should I have my windows cleaned?",
    answer:
      "For most Triangle-area homes, we recommend professional window cleaning every 3 to 4 months — that's about 3-4 times per year. Homes near construction zones, heavy tree cover, or high-traffic roads may benefit from more frequent service. Our subscription plans make scheduling easy and save you money long-term.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve the entire Triangle region including Cary (our home base), Raleigh, Durham, Apex, Holly Springs, Fuquay-Varina, Wake Forest, and surrounding communities. If you're not sure whether we service your area, give us a call at (984) 212-2799 — chances are, we do.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">
            Common Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className="bg-white rounded-xl border border-navy/10 overflow-hidden transition-shadow duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-body font-semibold text-navy pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-gold shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className="overflow-hidden transition-all duration-400 ease-in-out"
                  style={{
                    maxHeight: isOpen ? "500px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-6 pb-5">
                    <p className="font-body text-navy/60 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
