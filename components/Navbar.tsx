// Equinox Window Cleaning — Navbar
"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const leftLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

const rightLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
];

const allLinks = [...leftLinks, ...rightLinks];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-navy/95 backdrop-blur-md shadow-lg py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
          {/* Left Links (desktop) — pushed toward center */}
          <div className="hidden lg:flex items-center gap-6 mr-8">
            {leftLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-sm text-white/80 hover:text-gold transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <Link href="/" className="relative flex-shrink-0 mx-4">
            <Image
              src="/logo.png"
              alt="Equinox Window Cleaning"
              width={140}
              height={70}
              className={`transition-all duration-500 ${
                scrolled ? "h-12 w-auto" : "h-16 w-auto"
              }`}
              priority
            />
          </Link>

          {/* Right Links + CTA (desktop) — pushed toward center */}
          <div className="hidden lg:flex items-center gap-6 ml-8">
            {rightLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-sm text-white/80 hover:text-gold transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/services#book"
              className="font-body text-sm font-semibold bg-gold hover:bg-gold-light text-navy px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-white p-2 absolute right-6"
            aria-label="Open navigation menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-navy transition-all duration-500 flex flex-col items-center justify-center ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-6 right-6 text-white p-2"
          aria-label="Close navigation menu"
        >
          <X size={32} />
        </button>

        {/* Mobile Logo */}
        <Image
          src="/logo.png"
          alt="Equinox Window Cleaning"
          width={120}
          height={60}
          className="h-16 w-auto mb-10"
        />

        <div className="flex flex-col items-center gap-8">
          {allLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-display text-3xl text-white hover:text-gold transition-colors duration-300"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/services#book"
            onClick={() => setMobileOpen(false)}
            className="font-body text-lg font-semibold bg-gold text-navy px-10 py-3 rounded-full mt-4 hover:bg-gold-light transition-colors duration-300"
          >
            Book Now
          </Link>
        </div>

        <div className="absolute bottom-8 text-white/40 font-body text-sm">
          (984) 212-2799
        </div>
      </div>
    </>
  );
}
