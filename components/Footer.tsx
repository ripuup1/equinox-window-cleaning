// Equinox Window Cleaning — Footer
import { Mail, Phone, MapPin, Shield } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#why-equinox" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#cta" },
];

const servicesList = [
  "Window Cleaning",
  "House Washing",
  "Driveway Cleaning",
  "Deck & Patio Cleaning",
  "Sidewalk Washing",
];

export default function Footer() {
  return (
    <footer className="bg-navy pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1 — Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Equinox Window Cleaning"
                width={140}
                height={70}
                className="h-16 w-auto"
              />
            </div>
            <p className="font-body text-white/40 text-sm leading-relaxed mb-6">
              Premium window and exterior cleaning for homes across North
              Carolina&apos;s Triangle region.
            </p>
            {/* Social Icons (placeholder links) */}
            <div className="flex gap-3">
              {["facebook", "instagram", "google"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold/20 flex items-center justify-center transition-colors duration-300"
                  aria-label={`Follow us on ${platform}`}
                >
                  <span className="font-body text-white/60 text-xs uppercase">
                    {platform[0].toUpperCase()}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="font-body font-semibold text-white text-sm tracking-wider uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-white/40 hover:text-gold text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h4 className="font-body font-semibold text-white text-sm tracking-wider uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {servicesList.map((service) => (
                <li key={service}>
                  <span className="font-body text-white/40 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="font-body font-semibold text-white text-sm tracking-wider uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:Info@equinoxnc.net"
                  className="font-body text-white/40 hover:text-gold text-sm transition-colors duration-300 flex items-center gap-2"
                >
                  <Mail size={14} className="text-gold shrink-0" />
                  Info@equinoxnc.net
                </a>
              </li>
              <li>
                <a
                  href="tel:9842122799"
                  className="font-body text-white/40 hover:text-gold text-sm transition-colors duration-300 flex items-center gap-2"
                >
                  <Phone size={14} className="text-gold shrink-0" />
                  (984) 212-2799
                </a>
              </li>
              <li>
                <span className="font-body text-white/40 text-sm flex items-center gap-2">
                  <MapPin size={14} className="text-gold shrink-0" />
                  Cary, NC
                </span>
              </li>
            </ul>

            {/* Licensed & Insured Badge */}
            <div className="mt-6 inline-flex items-center gap-2 bg-white/5 border border-gold/20 rounded-full px-4 py-2">
              <Shield size={14} className="text-gold" />
              <span className="font-body text-white/60 text-xs">
                Licensed &amp; Insured
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-white/30 text-xs">
              &copy; 2025 Equinox Cleaning. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="font-body text-white/30 hover:text-white/60 text-xs transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-body text-white/30 hover:text-white/60 text-xs transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
          <p className="font-body text-white/20 text-xs mt-4 text-center">
            Serving Cary, Holly Springs, Apex, Raleigh, Fuquay-Varina, Durham,
            Wake Forest, and surrounding NC communities.
          </p>
        </div>
      </div>
    </footer>
  );
}
