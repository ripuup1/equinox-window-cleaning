// Equinox Window Cleaning — ServiceArea
import { Phone } from "lucide-react";

const cities = [
  "Cary (HQ)",
  "Raleigh",
  "Durham",
  "Apex",
  "Holly Springs",
  "Fuquay-Varina",
  "Wake Forest",
];

export default function ServiceArea() {
  return (
    <section className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">
            Proudly Serving the Triangle
          </h2>
          <p className="font-body text-navy/60 text-lg max-w-xl mx-auto">
            From Holly Springs to Wake Forest, we&apos;re your local window
            cleaning experts.
          </p>
        </div>

        {/* City Chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {cities.map((city) => (
            <span
              key={city}
              className={`font-body text-sm px-4 py-2 rounded-full transition-all duration-300 ${
                city.includes("HQ")
                  ? "bg-gold text-navy font-semibold shadow-md shadow-gold/20"
                  : "bg-white text-navy border border-navy/10 hover:bg-navy hover:text-white"
              }`}
            >
              {city}
            </span>
          ))}
        </div>

        {/* Google Maps Embed */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-navy/10 mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207714.02775578085!2d-78.93!3d35.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac8c56c91f7e67%3A0x3ac0f10d97e2e085!2sCary%2C%20NC!5e0!3m2!1sen!2sus!4v1709000000000"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Equinox Window Cleaning service area — Cary, NC and the Triangle"
            className="w-full"
          />
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
