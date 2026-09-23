import { Footer, PageWrapper } from '../components/layout';
import { Navbar } from '../components/navigation';
import { HeroSection } from '../sections/Hero';
import { AboutSection } from '../sections/About';
import { MissionVisionSection } from '../sections/MissionVision/MissionVisionSection';
import { ValuesSection } from '../sections/Values/ValuesSection';
import { TrustSection } from '../sections/Trust/TrustSection';
import { ServicesSection } from '../sections/Services';
import { BrandsGallerySection } from '../sections/BrandsGallery';
import { DifferentiatorsSection } from '../sections/Differentiators';
import { SpecialistSection } from '../sections/Specialist/SpecialistSection';
import { TeamSection } from '../sections/Team/TeamSection';
import { ClientsSection } from '../sections/Clients/ClientsSection';
import { ContactSection } from '../sections/Contact';
import { WhatsAppButton } from '../components/ui';
import { clientConfig } from '../data';

export function HomePage() {
  return (
    <PageWrapper>
      <Navbar />

      <HeroSection />

      <AboutSection />

      <MissionVisionSection />

      <ValuesSection />

      <TrustSection />

      <ServicesSection />

      <DifferentiatorsSection />

      <SpecialistSection />

      <TeamSection />

      {clientConfig.featureFlags.gallery && <BrandsGallerySection />}

      <ClientsSection />

      <ContactSection />

      <Footer />

      <WhatsAppButton />
    </PageWrapper>
  );
}
