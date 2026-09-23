import type { ProductItem } from '../../types';
import { SectionTitle } from '../../components/ui';
import { designTokens } from '../../styles/tokens';

export interface ProductsMarqueeProps {
  title: string;
  items: ProductItem[];
}

export function ProductsMarquee({ title, items }: ProductsMarqueeProps) {
  if (!items.length) {
    return null;
  }

  return (
    <section aria-label={title} style={{ display: 'grid', gap: designTokens.spacing.md }}>
      <SectionTitle as="h3" title={title} />
      <div className="gallery-products-grid" role="list" aria-label={title}>
        {items.map((product) => (
          <div key={product.title} className="gallery-product-item" role="listitem">
            <img src={product.image} alt={product.title} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
