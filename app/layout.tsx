// Equinox Window Cleaning — Root Layout
import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Equinox Window Cleaning | Premium Window & Exterior Cleaning in Cary, NC",
  description:
    "Professional window cleaning, house washing, and exterior cleaning services in Cary, Raleigh, and the Triangle. Non-Spot Technology. Fully insured. Free quotes in 24 hours.",
  keywords: [
    "window cleaning Cary NC",
    "house washing Raleigh",
    "pressure washing Triangle NC",
    "exterior cleaning Durham",
    "Non-Spot Technology",
    "Equinox Window Cleaning",
  ],
  openGraph: {
    title: "Equinox Window Cleaning | Crystal Clear Windows. Every Time.",
    description:
      "North Carolina's premium window cleaning service. Serving Cary, Raleigh, Durham, Apex, Holly Springs, and the entire Triangle area.",
    type: "website",
    locale: "en_US",
    siteName: "Equinox Window Cleaning",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
