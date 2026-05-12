import HeroSection from "@/app/components/home/Herosection";
import TopNavBar from "./Navbar";
import WhyChooseEncrava from "./WhyEncrava";
import IndustriesSection from "./Industriessection";
import ServicesSection from "./Services";
import ProductsSection from "./Productssection";
import EngagementProcess from "./Engagementprocess";
import FAQSection from "./Questions";
import ComplianceStrip from "./Compliancestrip";
import CTASection from "./CTA";
import Footer from "./Footer";


export default function HomePage() {
  return (
    <>
      <TopNavBar />
      <HeroSection />
      <WhyChooseEncrava />
      <ProductsSection />
      <IndustriesSection />
      
      <ServicesSection />
      <EngagementProcess />
      <FAQSection />
      <ComplianceStrip />
      <CTASection />
      <Footer />
    </>
  );
}