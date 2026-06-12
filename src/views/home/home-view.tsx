import { ContactSection } from "@/components/sections/contact-section";
import { HeritageSection } from "@/components/sections/heritage-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PartnersSection } from "@/components/sections/partners-section";
import { ServicesSection } from "@/components/sections/services-section";
import { StatsSection } from "@/components/sections/stats-section";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <HeroSection />
        <StatsSection />
        <HeritageSection />
        <ServicesSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
