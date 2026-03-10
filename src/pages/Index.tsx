import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import IKSDomainsSection from "@/components/IKSDomainsSection";
import TechIntegrationSection from "@/components/TechIntegrationSection";
import ObjectivesSection from "@/components/ObjectivesSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import ImpactSection from "@/components/ImpactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import GlobalStarField from "@/components/GlobalStarField";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <GlobalStarField />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <IKSDomainsSection />
      <TechIntegrationSection />
      <ObjectivesSection />
      <ActivitiesSection />
      <ImpactSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
