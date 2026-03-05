// Equinox Window Cleaning — About Page
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Shield, Clock, Leaf, Star, CheckCircle, ArrowRight } from "lucide-react";
import { BLUR_HERO_ABOUT, BLUR_ABOUT_STORY } from "@/lib/blurData";

export const metadata: Metadata = {
  title: "About Us | Equinox Window Cleaning",
  description:
    "Learn about Equinox Window Cleaning — NC's fastest growing window cleaning company. Serving Cary, Raleigh, and the Triangle with Non-Spot Technology.",
};

const values = [
  {
    icon: Shield,
    title: "Fully Insured",
    description:
      "$1 million per occurrence and $2 million aggregate coverage. Your home is always protected.",
  },
  {
    icon: Clock,
    title: "Quick Response",
    description:
      "Free estimates within 24 hours. Clear timelines with guaranteed satisfaction on every job.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description:
      "We use environmentally responsible cleaning solutions that are safe for your family, pets, and landscaping.",
  },
  {
    icon: Star,
    title: "Quality Obsessed",
    description:
      "We don't leave until you're happy. Period. Every job gets our full attention to detail.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <PageHero
        eyebrow="About Equinox"
        title="Crystal Clear All Year"
        description="NC's fastest growing window cleaning company — built on precision, care, and a relentless commitment to quality."
        image="/hero-about.jpg"
        blurDataURL={BLUR_HERO_ABOUT}
      />

      {/* Our Story */}
      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative h-80 sm:h-[450px] rounded-2xl overflow-hidden">
              <Image
                src="/about-story.jpg"
                alt="Equinox team member performing gutter cleaning"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL={BLUR_ABOUT_STORY}
              />
            </div>

            {/* Content */}
            <div>
              <p className="font-body text-gold text-xs tracking-[0.2em] uppercase font-semibold mb-4">
                Our Story
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mb-6">
                Born From a Simple Observation
              </h2>
              <div className="space-y-4 font-body text-navy/60 leading-relaxed">
                <p>
                  In the heart of Cary, we noticed a pervasive problem: dirty
                  windows obscuring the views of homeowners across the Triangle.
                  Beautiful homes with beautiful neighborhoods — but windows
                  covered in pollen, grime, and hard water stains.
                </p>
                <p>
                  Equinox was founded on a simple idea: what if window cleaning
                  could be easy, affordable, and subscription-based — like the
                  services people already rely on? No more remembering to book.
                  No more searching for a new company every time.
                </p>
                <p>
                  Through community partnerships, eco-friendly products, and our
                  proprietary Non-Spot Technology, we&apos;ve become a trusted
                  name across North Carolina&apos;s Triangle area. Every window we
                  clean is a promise kept — crystal clear, every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-xl">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">
              What We Stand For
            </h2>
            <p className="font-body text-navy/60 text-lg">
              The principles that guide every job we take on.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-white rounded-2xl p-8 border border-navy/5">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-navy/60 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Non-Spot Technology */}
      <section className="py-20 sm:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <p className="font-body text-gold text-xs tracking-[0.2em] uppercase font-semibold mb-4">
                Our Technology
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                Non-Spot Technology
              </h2>
              <p className="font-body text-white/60 leading-relaxed mb-6">
                Non-Spot Technology is our proprietary invisible protective
                coating that bonds to your glass after every clean. It
                effectively repels water, dirt, and debris — keeping your windows
                cleaner up to 3x longer than a standard wash.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Invisible coating — no visual impact on your glass",
                  "Repels water, pollen, dirt, and debris",
                  "Keeps windows cleaner 3x longer",
                  "Applied after every professional clean",
                  "Included in premium service packages",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-body text-white/60 text-sm"
                  >
                    <CheckCircle
                      size={16}
                      className="text-gold shrink-0 mt-0.5"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-body font-semibold text-gold hover:text-gold-light transition-colors duration-300"
              >
                View Our Services <ArrowRight size={16} />
              </Link>
            </div>

            {/* Image */}
            <div className="relative h-80 sm:h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/process-nonspot.png"
                alt="Non-Spot Technology application"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 max-w-xl">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mb-4">
              Serving the Triangle
            </h2>
            <p className="font-body text-navy/60 text-lg">
              We proudly serve homeowners across North Carolina&apos;s Triangle
              region.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {[
              "Cary (HQ)",
              "Raleigh",
              "Durham",
              "Apex",
              "Holly Springs",
              "Fuquay-Varina",
              "Wake Forest",
            ].map((city) => (
              <span
                key={city}
                className={`font-body text-sm px-4 py-2 rounded-full ${
                  city.includes("HQ")
                    ? "bg-gold text-navy font-semibold"
                    : "bg-white text-navy border border-navy/10"
                }`}
              >
                {city}
              </span>
            ))}
          </div>

          <p className="font-body text-navy/50 text-sm">
            Don&apos;t see your city? Call us at{" "}
            <a
              href="tel:9842122799"
              className="text-gold hover:text-gold-dark transition-colors"
            >
              (984) 212-2799
            </a>{" "}
            — we likely serve your area.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-navy noise-overlay">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to See the Difference?
          </h2>
          <p className="font-body text-white/50 text-lg mb-10 max-w-lg mx-auto">
            Join hundreds of Triangle homeowners who trust Equinox for crystal
            clear windows, year-round.
          </p>
          <Link
            href="mailto:Info@equinoxnc.net?subject=Free%20Quote%20Request"
            className="inline-block font-body font-semibold bg-gold hover:bg-gold-light text-navy px-10 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:shadow-gold/25"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
