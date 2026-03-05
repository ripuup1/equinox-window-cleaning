// Equinox Window Cleaning — FAQ Page
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ | Equinox Window Cleaning",
  description:
    "Frequently asked questions about Equinox Window Cleaning services, Non-Spot Technology, pricing, and service areas in the NC Triangle.",
};

const generalFaqs = [
  {
    question: "How long does a window cleaning appointment take?",
    answer:
      "Most residential jobs take between 1.5 to 3 hours depending on the size of your home and the number of windows. A standard 20-window home typically takes about 2 hours. We'll give you a time estimate when we provide your free quote so you can plan accordingly.",
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
    question: "Do you clean both interior and exterior windows?",
    answer:
      "Yes! We offer both interior and exterior window cleaning. Many clients opt for exterior-only on a recurring basis and add interior cleaning once or twice a year for a complete refresh. We'll customize a plan that fits your needs and budget.",
  },
];

const technologyFaqs = [
  {
    question: "What is Non-Spot Technology and do I need it?",
    answer:
      "Non-Spot Technology is an invisible protective coating we apply to your glass after every clean. It bonds at the surface level to repel water, dirt, dust, and pollen — keeping your windows cleaner up to 3x longer than a standard wash. It's included in our premium service package and highly recommended for homeowners who want lasting results between cleanings.",
  },
  {
    question: "Is Non-Spot Technology safe for all window types?",
    answer:
      "Yes. Non-Spot Technology is safe for all residential glass types including tempered, low-E, double-pane, and tinted windows. The coating is completely invisible and won't affect the appearance or performance of your windows in any way.",
  },
  {
    question: "How long does the Non-Spot coating last?",
    answer:
      "The Non-Spot coating typically keeps your windows noticeably cleaner for 3-4 months depending on your environment. Homes with heavy tree cover or near construction may see a shorter window. That's why we recommend our recurring subscription plans — each visit renews the protective coating.",
  },
];

const businessFaqs = [
  {
    question: "Are you insured?",
    answer:
      "Absolutely. We carry $1 million per occurrence and $2 million aggregate general liability insurance. Every team member is covered, and we're happy to provide a certificate of insurance upon request. Your home and property are fully protected when you work with Equinox.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve the entire Triangle region including Cary (our home base), Raleigh, Durham, Apex, Holly Springs, Fuquay-Varina, Wake Forest, and surrounding communities. If you're not sure whether we service your area, give us a call at (984) 212-2799 — chances are, we do.",
  },
  {
    question: "How do your subscription plans work?",
    answer:
      "Our subscription plans let you set a recurring cleaning schedule — monthly, bi-monthly, or quarterly. You'll get priority scheduling, guaranteed pricing, and your Non-Spot coating is renewed with every visit. No long-term contracts. Cancel or adjust anytime. It's the easiest way to keep your home looking its best year-round.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Getting a quote is easy and free! You can email us at Info@equinoxnc.net, call (984) 212-2799, or click any 'Get a Quote' button on our site. We'll respond within 24 hours with a detailed estimate based on your home's size and the services you need. No obligation, no pressure.",
  },
];

export default function FAQPage() {
  return (
    <main>
      <Navbar />

      <PageHero
        eyebrow="Frequently Asked Questions"
        title="Got Questions? We've Got Answers."
        description="Everything you need to know about our services, technology, and how we work. Can't find what you're looking for? Give us a call."
      />

      {/* FAQ Sections */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-6 space-y-16">
          {/* General */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-8">
              General Questions
            </h2>
            <FAQAccordion faqs={generalFaqs} />
          </div>

          {/* Technology */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-8">
              Non-Spot Technology
            </h2>
            <FAQAccordion faqs={technologyFaqs} />
          </div>

          {/* Business */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-8">
              Business &amp; Scheduling
            </h2>
            <FAQAccordion faqs={businessFaqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-navy noise-overlay">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="font-body text-white/50 text-lg mb-10 max-w-lg mx-auto">
            We&apos;re here to help. Reach out and we&apos;ll get back to you
            within 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="mailto:Info@equinoxnc.net"
              className="inline-block font-body font-semibold bg-gold hover:bg-gold-light text-navy px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold/25"
            >
              Email Us
            </Link>
            <a
              href="tel:9842122799"
              className="inline-block font-body font-semibold border-2 border-white/30 hover:border-white text-white px-8 py-3.5 rounded-full transition-all duration-300"
            >
              Call (984) 212-2799
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
