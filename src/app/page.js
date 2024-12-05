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
      <header className="sticky top-0 z-50 bg-white">
        <Header />
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 space-y-16">
          {/* Hero Section */}
          <HeroSection />

          {/* Features Section */}
          <FeaturesSection />

          {/* Audience Section */}
          <AudienceSection />

          {/* AudienceReports Section */}
          <AudienceReportsSection />

          {/* HowItWorks Section */}
          <HowItWorksSection />

          {/* HowItWorks Section */}
          <PricingSection />

          {/* AppScreenshot Section */}
          <AppScreenshotsSection />

          {/* Download Section */}
          <DownloadSection />

          {/* Testimonial Section */}
          <TestimonialsSection />

          {/* FAQs Section */}
          <FAQSection />

          {/* Blog Section */}
          <BlogSection />

          {/* BrandLogo Section */}
          <BrandLogosSection />

          {/* BrandLogo Section */}
          <ContactUsSection />
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
