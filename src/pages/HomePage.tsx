import { Footer, PageWrapper } from '../components/layout';
import { Navbar } from '../components/navigation';
import { HeroSection } from '../sections/Hero';
import { AboutSection } from '../sections/About';
import { MissionVisionSection } from '../sections/MissionVision/MissionVisionSection';
import { ValuesSection } from '../sections/Values/ValuesSection';
import { ServicesSection } from '../sections/Services';
import { BrandsGallerySection } from '../sections/BrandsGallery';
import { DifferentiatorsSection } from '../sections/Differentiators';
import { ProjectsSection } from '../sections/Projects';
import { ClientsSection } from '../sections/Clients/ClientsSection';
import { ContactSection } from '../sections/Contact';

export function HomePage() {
  return (
    <PageWrapper>
      <Navbar />

      <HeroSection />

      <AboutSection />

      <MissionVisionSection />

      <ServicesSection />

      <ValuesSection />

      <ProjectsSection />

      <DifferentiatorsSection />

      <BrandsGallerySection />

      <ClientsSection />

      <ContactSection />

      <Footer />
    </PageWrapper>
  );
}
