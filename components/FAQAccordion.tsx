// Equinox Window Cleaning — FAQAccordion (reusable client component)
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
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
  );
}
