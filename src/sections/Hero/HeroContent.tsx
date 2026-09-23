import type { Company } from '../../types';

import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';
import { Button, SectionTitle } from '../../components/ui';

export interface HeroContentProps {
  company: Company;
}

export function HeroContent({ company }: HeroContentProps) {
  function handleCtaClick(targetHref: string) {
    if (targetHref.startsWith('#')) {
      window.location.hash = targetHref;
      return;
    }

    window.location.href = targetHref;
  }

  return (
    <div style={{ display: 'grid', gap: designTokens.spacing.lg, maxWidth: '42rem' }}>
      <SectionTitle
        as="h1"
        eyebrow={company.tagline}
        title={company.heroTitle}
        subtitle={company.heroDescription}
      />

      {company.heroBadges && company.heroBadges.length > 0 ? (
        <p style={{ margin: 0, color: theme.textSecondaryColor, fontWeight: 700, letterSpacing: '0.02em' }}>
          {company.heroBadges.join(' · ')}
        </p>
      ) : null}

      {company.heroTrustIndicators && company.heroTrustIndicators.length > 0 ? (
        <p
          style={{
            margin: 0,
            color: theme.primaryColor,
            fontWeight: 700,
            fontFamily: theme.fontFamilyHeading,
            letterSpacing: '0.04em',
            fontSize: '1.05rem',
          }}
        >
          {company.heroTrustIndicators[0]}
        </p>
      ) : null}

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: designTokens.spacing.sm,
        }}
      >
        <Button
          variant="primary"
          ariaLabel={company.primaryCTA.ariaLabel}
          onClick={() => handleCtaClick(company.primaryCTA.href)}
          className="focus-ring"
        >
          {company.primaryCTA.label}
        </Button>

        <Button
          variant="secondary"
          ariaLabel={company.secondaryCTA.ariaLabel}
          onClick={() => handleCtaClick(company.secondaryCTA.href)}
          className="focus-ring"
          style={{
            color: theme.textOnDarkColor,
          }}
        >
          {company.secondaryCTA.label}
        </Button>
      </div>
    </div>
  );
}