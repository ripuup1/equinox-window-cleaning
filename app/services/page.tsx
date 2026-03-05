// Equinox Window Cleaning — Services Page
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Sparkles, Home, Droplets, TreePine, Footprints, Columns2, ArrowRight, Clock, Shield, CheckCircle } from "lucide-react";
import { BLUR_HERO_SERVICES } from "@/lib/blurData";

export const metadata: Metadata = {
  title: "Our Services | Equinox Window Cleaning",
  description:
    "Professional window cleaning, house washing, pressure washing, driveway cleaning, and more. Serving Cary, Raleigh, and the Triangle area.",
};

const services = [
  {
    id: "window-cleaning",
    title: "Exterior Window Cleaning",
    description:
      "Cleaning the exterior of your windows and keeping them looking pristine is what we do best. With our recurring cleaning plans, your windows will always shine! Our Non-Spot Technology applies an invisible protective coating that repels water, dirt, and debris — keeping your glass cleaner up to 3x longer.",
    image: "/service-windows.jpg",
    icon: Sparkles,
    benefits: [
      "Interior & exterior cleaning available",
      "Non-Spot protective coating included",
      "Screen cleaning & frame detailing",
      "Recurring subscription plans available",
    ],
  },
  {
    id: "house-washing",
    title: "House Washing",
    description:
      "Say goodbye to dirt, mold, and rust! Our house washing restores your siding's shine, making your home look fresh. We use eco-friendly solutions and soft wash technology designed to clean thoroughly without damaging your siding, paint, or landscaping.",
    image: "/service-house.jpg",
    icon: Home,
    benefits: [
      "Soft wash technology — safe for all siding types",
      "Removes mold, mildew, algae, and dirt",
      "Eco-friendly cleaning solutions",
      "Restores curb appeal instantly",
    ],
  },
  {
    id: "driveway-cleaning",
    title: "Driveway Cleaning",
    description:
      "Revitalize your driveway with our specialized pressure washing, effectively eliminating stains, oil, and debris to give it a refreshed and clean appearance. We work on concrete, pavers, asphalt, and more — bringing surfaces back to looking brand new.",
    image: "/service-driveway.jpg",
    icon: Droplets,
    benefits: [
      "High-pressure restoration for all surfaces",
      "Oil, rust, and stain removal",
      "Concrete, paver, and asphalt safe",
      "Boosts property value and curb appeal",
    ],
  },
  {
    id: "deck-patio",
    title: "Deck & Patio Cleaning",
    description:
      "Extend the life of your outdoor living spaces with our thorough cleaning services for decks and patios, removing buildup and enhancing their overall look. Whether you have wood, composite, stone, or concrete, we tailor our approach to protect the surface while delivering a deep clean.",
    image: "/service-deck.jpg",
    icon: TreePine,
    benefits: [
      "Safe for wood, composite, and stone",
      "Removes algae, moss, and stains",
      "Extends the life of your outdoor spaces",
      "Prep service available before staining/sealing",
    ],
  },
  {
    id: "walkway-cleaning",
    title: "Sidewalk & Walkway Washing",
    description:
      "Improve the safety and aesthetic of your walkways with our pressure washing service, removing stains for a cleaner, inviting entrance. Dirty walkways aren't just an eyesore — they can be a slip hazard. We restore them to look brand new.",
    image: "/service-pressure.png",
    icon: Footprints,
    benefits: [
      "Removes dirt, algae, and slip hazards",
      "Works on concrete, brick, and stone",
      "Enhances safety and curb appeal",
      "Quick turnaround with lasting results",
    ],
  },
  {
    id: "gutter-cleaning",
    title: "Gutter Cleaning",
    description:
      "We prevent roof damage by clearing gutters, ensuring smooth water flow, and protecting your home year-round. Our gutter cleaning service helps avoid water buildup that can lead to foundation damage, roof leaks, and landscape erosion.",
    image: "/service-gutter.jpg",
    icon: Columns2,
    benefits: [
      "Full debris removal and flush",
      "Prevents roof and foundation damage",
      "Downspout clearing included",
      "Seasonal maintenance plans available",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      <PageHero
        eyebrow="Our Professional Services"
        title="Expert Cleaning Solutions for Your Home"
        description="Discover a wide range of expert cleaning solutions tailored to your needs. From window cleaning to pressure washing, Equinox delivers exceptional results with precision, care, and eco-friendly techniques."
        image="/hero-services.jpg"
        blurDataURL={BLUR_HERO_SERVICES}
      />

      {/* Trust Bar */}
      <section className="bg-navy-light py-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-8 text-white/50 font-body text-sm">
          <span className="flex items-center gap-2">
            <Clock size={16} className="text-gold" />
            Free Estimate Within 24 Hours
          </span>
          <span className="flex items-center gap-2">
            <Shield size={16} className="text-gold" />
            $2M Insurance Coverage
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle size={16} className="text-gold" />
            100% Satisfaction Guaranteed
          </span>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isEven = i % 2 === 0;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    isEven ? "" : "lg:[direction:rtl]"
                  }`}
                >
                  {/* Image */}
                  <div className={`relative h-80 sm:h-[400px] rounded-2xl overflow-hidden ${isEven ? "" : "lg:[direction:ltr]"}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  {/* Content */}
                  <div className={isEven ? "" : "lg:[direction:ltr]"}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                        <Icon size={20} className="text-gold" />
                      </div>
                      <span className="font-body text-xs text-gold tracking-[0.2em] uppercase font-semibold">
                        Service {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-4">
                      {service.title}
                    </h2>

                    <p className="font-body text-navy/60 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-3 font-body text-navy/70 text-sm"
                        >
                          <CheckCircle
                            size={16}
                            className="text-gold shrink-0 mt-0.5"
                          />
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="mailto:Info@equinoxnc.net?subject=Quote%20Request%20-%20Window%20Cleaning"
                      className="inline-flex items-center gap-2 font-body font-semibold bg-gold hover:bg-gold-light text-navy px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 text-sm"
                    >
                      Get a Free Quote <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section id="book" className="py-20 sm:py-28 bg-navy noise-overlay">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-body text-gold text-xs sm:text-sm tracking-[0.25em] uppercase mb-4">
            Ready to Get Started?
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Get Your Free Quote in 24 Hours
          </h2>
          <p className="font-body text-white/50 text-lg mb-10 max-w-lg mx-auto">
            No commitment. No pressure. Just spotless results and honest pricing.
          </p>
          <Link
            href="mailto:Info@equinoxnc.net?subject=Free%20Quote%20Request"
            className="inline-block font-body font-semibold bg-gold hover:bg-gold-light text-navy px-10 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:shadow-gold/25"
          >
            Request a Free Estimate
          </Link>
          <p className="font-body text-white/40 text-sm mt-6">
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

      <Footer />
    </main>
  );
}
