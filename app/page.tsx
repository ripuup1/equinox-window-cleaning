// Equinox Window Cleaning — Homepage
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatBar from "@/components/StatBar";
import Services from "@/components/Services";
import WhyEquinox from "@/components/WhyEquinox";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import ServiceArea from "@/components/ServiceArea";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatBar />
      <Services />
      <WhyEquinox />
      <Process />
      <Testimonials />
      <ServiceArea />
      <CTABanner />
      <FAQ />
      <Footer />
    </main>
  );
}
