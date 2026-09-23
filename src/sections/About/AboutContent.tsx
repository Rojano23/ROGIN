import type { Company, ContentTextAlignment } from '../../types';

import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';
import { Badge, SectionTitle } from '../../components/ui';

export interface AboutContentProps {
  company: Company;
  contentAlignment: ContentTextAlignment;
}

export function AboutContent({ company, contentAlignment }: AboutContentProps) {
  const paragraphs = company.aboutParagraphs?.length ? company.aboutParagraphs : [company.aboutDescription];

  return (
    <div style={{ display: 'grid', gap: designTokens.spacing.lg, maxWidth: '62rem' }}>
      <SectionTitle
        as="h2"
        eyebrow="Quiénes somos"
        title={company.aboutTitle}
        subtitle={company.aboutSubtitle}
      />

      <div style={{ display: 'grid', gap: designTokens.spacing.lg }}>
        {paragraphs.map((paragraph) => (
          <p
            key={paragraph.slice(0, 24)}
            style={{
              margin: 0,
              color: theme.textSecondaryColor,
              fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
              lineHeight: 1.8,
              textAlign: contentAlignment,
            }}
          >
            {paragraph}
          </p>
        ))}
      </div>

      {company.aboutHighlights && company.aboutHighlights.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: designTokens.spacing.sm }}>
          {company.aboutHighlights.map((item) => (
            <Badge key={item} label={item} tone="border" />
          ))}
        </div>
      ) : null}
    </div>
  );
}
