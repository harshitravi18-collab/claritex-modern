import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TickerBar } from "@/components/sections/TickerBar";
import { ServicesOverviewSection } from "@/components/sections/ServicesOverviewSection";
import { AIServicesSection } from "@/components/sections/AIServicesSection";
import { BPOSection } from "@/components/sections/BPOSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { CTASection } from "@/components/sections/CTASection";
import { ContactSection } from "@/components/sections/ContactSection";
import { scrollToId } from "@/lib/utils/scrollToId";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar onNavigate={scrollToId} />
      <main>
        <HeroSection onNavigate={scrollToId} />
        <TickerBar />
        <ServicesOverviewSection onNavigate={scrollToId} />
        <AIServicesSection onNavigate={scrollToId} />
        <BPOSection onNavigate={scrollToId} />
        <AboutSection />
        <CaseStudiesSection />
        <ProcessSection />
        <IndustriesSection onNavigate={scrollToId} />
        <TestimonialsSection />
        <InsightsSection />
        <CTASection onNavigate={scrollToId} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
