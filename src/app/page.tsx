import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServiceGrid from "@/components/ServiceGrid";
import WhyChoose from "@/components/WhyChoose";
import SafetySection from "@/components/SafetySection";
import FleetSpotlight from "@/components/FleetSpotlight";
import AvailableCities from "@/components/AvailableCities";
import AppDownloadCTA from "@/components/AppDownloadCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServiceGrid />
        <WhyChoose />
        <SafetySection />
        <AvailableCities />
        <FleetSpotlight />
        <AppDownloadCTA />
      </main>
      <Footer />
    </>
  );
}
