import AppScreenshotsSection from "@/components/AppScreenshotsSection";
import AudienceReportsSection from "@/components/AudienceReportSection";
import AudienceSection from "@/components/AudienceSection";
import BlogSection from "@/components/BlogSection";
import BrandLogosSection from "@/components/BrandLogosSection";
import ContactUsSection from "@/components/ContactUsSection";
import CopyrightFooter from "@/components/CopyrightFooter";
import DownloadSection from "@/components/DownloadSection";
import FAQSection from "@/components/FAQSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <header className="sticky top-0 z-50 bg-white  md:px-16">
        <Header />
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto space-y-16 md:px-16">
          {/* Hero Section */}
          <div id="home">
            <HeroSection />
          </div>

          {/* Features Section */}
          <div id="features-section">
            <FeaturesSection />
          </div>

          {/* Audience Section */}
          <div id="about">
            <AudienceSection />
          </div>

          {/* Pricing Section */}
          <div id="pricing">
            <PricingSection />
          </div>

          {/* AppScreenshot Section */}
          <div id="screenshots-section">
            <AppScreenshotsSection />
          </div>

          {/* Download Section */}
          <div id="download-section">
            <DownloadSection />
          </div>

          {/* Testimonial Section */}
          <div id="testimonials">
            <TestimonialsSection />
          </div>

          {/* FAQs Section */}
          <div id="faq">
            <FAQSection />
          </div>

          {/* Contact Us Section */}
          <div id="contactus">
            <ContactUsSection />
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-100">
        <Footer />
      </footer>

      <CopyrightFooter />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
}
