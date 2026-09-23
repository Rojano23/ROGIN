import { Section } from '../../components/layout';
import { SectionTitle } from '../../components/ui';
import { clientConfig } from '../../data';
import { designTokens } from '../../styles/tokens';
import { BrandsMarquee } from './BrandsMarquee';
import { ProductsMarquee } from './ProductsMarquee';

export function BrandsGallerySection() {
  const { featureFlags, gallery } = clientConfig;

  if (!featureFlags.gallery || (!gallery.brands.length && !gallery.products.length)) {
    return null;
  }

  return (
    <Section ariaLabel="Experiencia y galería" id="experiencia" spacing="lg">
      <div style={{ display: 'grid', gap: designTokens.spacing.xl }}>
        <SectionTitle
          as="h2"
          eyebrow="Experiencia"
          title="Galería"
          subtitle="+100 profesionales capacitados"
        />

        {gallery.brands.length > 0 ? (
          <BrandsMarquee title={gallery.brandsTitle} items={gallery.brands} />
        ) : null}

        {gallery.products.length > 0 ? (
          <ProductsMarquee title={gallery.productsTitle} items={gallery.products} />
        ) : null}
      </div>
    </Section>
  );
}
