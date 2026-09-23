import { Section } from '../../components/layout';
import { SectionTitle } from '../../components/ui';
import { clientConfig } from '../../data';
import { designTokens } from '../../styles/tokens';
import { ProductsMarquee } from './ProductsMarquee';

export function BrandsGallerySection() {
  const { featureFlags, gallery } = clientConfig;

  if (!featureFlags.gallery || !gallery.products.length) {
    return null;
  }

  return (
    <Section ariaLabel="Experiencia en obra" id="experiencia" spacing="lg">
      <div style={{ display: 'grid', gap: designTokens.spacing.xl }}>
        <SectionTitle
          as="h2"
          eyebrow="Experiencia"
          title="Experiencia en obra"
          subtitle="Proyectos ejecutados en infraestructura urbana, salud, edificación y mantenimiento."
        />

        <ProductsMarquee title={gallery.productsTitle} items={gallery.products} />
      </div>
    </Section>
  );
}
