// Equinox Window Cleaning — Blog Page
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog | Equinox Window Cleaning",
  description:
    "Tips, guides, and insights on window cleaning, home maintenance, and exterior care from the Equinox team.",
};

const posts = [
  {
    title: "Why Non-Spot Technology Keeps Your Windows Cleaner, Longer",
    excerpt:
      "Discover how our proprietary invisible coating bonds to your glass and repels water, dirt, and pollen for months after each clean.",
    category: "Technology",
    date: "Coming Soon",
    image: "/process-nonspot.png",
  },
  {
    title: "How Often Should You Clean Your Windows in North Carolina?",
    excerpt:
      "Pollen season, humidity, and red clay — here's how Triangle homeowners should schedule their window cleaning for best results.",
    category: "Tips & Guides",
    date: "Coming Soon",
    image: "/service-windows.jpg",
  },
  {
    title: "Pressure Washing vs. Soft Washing: What Your Home Actually Needs",
    excerpt:
      "Not all exterior cleaning is the same. Learn the difference between pressure washing and soft washing, and which one is right for your siding.",
    category: "Education",
    date: "Coming Soon",
    image: "/service-house.jpg",
  },
  {
    title: "5 Signs Your Gutters Need Professional Cleaning",
    excerpt:
      "Overflowing in a rainstorm? Sagging at the seams? Here are the warning signs that it's time to call in the pros.",
    category: "Home Maintenance",
    date: "Coming Soon",
    image: "/service-gutter.jpg",
  },
];

export default function BlogPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-body text-gold text-xs sm:text-sm tracking-[0.25em] uppercase mb-4">
            The Equinox Blog
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 max-w-3xl">
            Tips, Guides &amp; Insights
          </h1>
          <p className="font-body text-white/60 text-lg max-w-2xl">
            Expert advice on keeping your home&apos;s exterior looking its best
            — from the team that does it every day.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group bg-white rounded-2xl overflow-hidden border border-navy/5 hover:shadow-xl transition-shadow duration-500"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 bg-gold/90 text-navy font-body text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="font-body text-navy/40 text-xs mb-2">
                    {post.date}
                  </p>
                  <h3 className="font-display text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="font-body text-navy/60 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 font-body text-sm font-semibold text-gold">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <div className="text-center mt-16 py-12 bg-white rounded-2xl border border-navy/5">
            <p className="font-display text-2xl font-bold text-navy mb-3">
              More Articles Coming Soon
            </p>
            <p className="font-body text-navy/50 max-w-md mx-auto">
              We&apos;re working on helpful content about home maintenance,
              cleaning tips, and seasonal guides for Triangle homeowners.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy noise-overlay">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            Don&apos;t Wait for the Blog — Get Started Today
          </h2>
          <Link
            href="mailto:Info@equinoxnc.net?subject=Free%20Quote%20Request"
            className="inline-block font-body font-semibold bg-gold hover:bg-gold-light text-navy px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold/25 mt-4"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
