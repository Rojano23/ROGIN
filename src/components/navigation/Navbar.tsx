import { useMemo, useState } from 'react';

import { clientConfig } from '../../data';
import { getEnabledNavigationItems, navigationItems } from '../../data/navigation';
import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';
import { Container } from '../layout';
import { Button } from '../ui';
import { MobileMenu } from './MobileMenu';
import { NavigationLink } from './NavigationLink';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#inicio');
  const logo = clientConfig.company.logo;
  const { company } = clientConfig;
  const hasLogo = Boolean(logo?.src);

  const enabledItems = useMemo(
    () => getEnabledNavigationItems(navigationItems, clientConfig.featureFlags),
    [],
  );

  function handleCloseMenu() {
    setIsMobileMenuOpen(false);
  }

  function handleLinkClick(href: string) {
    setActiveHref(href);
    setIsMobileMenuOpen(false);
  }

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        borderBottom: `1px solid ${theme.borderColor}`,
        backgroundColor: theme.borderColor,
      }}
    >
      <Container
        as="nav"
        aria-label="Navegación principal"
        style={{
          display: 'grid',
          gap: designTokens.spacing.sm,
          paddingBlock: `${designTokens.spacing.sm}`,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: designTokens.spacing.md,
          }}
        >
          <a
            className="focus-ring"
            href="#inicio"
            aria-label={`Ir a inicio de ${clientConfig.company.companyName}`}
            style={{
              display: 'inline-flex',
              alignItems: 'flex-start',
              gap: designTokens.spacing.md,
              color: theme.textOnDarkColor,
              textDecoration: 'none',
              fontFamily: theme.fontFamilyHeading,
              fontWeight: 700,
            }}
            onClick={() => handleLinkClick('#inicio')}
          >
            {hasLogo ? (
              <img
                src={logo?.src}
                alt={logo?.alt ?? `Logotipo de ${company.companyName}`}
                width={logo?.width}
                height={logo?.height}
                style={{
                  display: 'block',
                  width: logo?.width ? `${logo.width + 12}px` : '2.2rem',
                  height: logo?.height ? `${logo.height + 4}px` : '2.2rem',
                  objectFit: 'contain',
                  marginTop: '0.1rem',
                }}
              />
            ) : (
              <span
                aria-hidden="true"
                style={{
                  width: '0.75rem',
                  height: '0.75rem',
                  borderRadius: '999px',
                  backgroundColor: theme.accentColor,
                }}
              />
            )}
            <div style={{ display: 'grid', gap: '0.08rem', lineHeight: 1.05 }}>
              <span style={{ fontSize: 'clamp(0.95rem, 1.7vw, 1.12rem)', letterSpacing: '0.01em' }}>{company.companyName}</span>
              {company.descriptor ? (
                <span
                  style={{
                    fontSize: '0.67rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: theme.accentColor,
                    fontFamily: theme.fontFamily,
                    fontWeight: 700,
                  }}
                >
                  {company.descriptor}
                </span>
              ) : null}
            </div>
          </a>

          <div className="nav-desktop-list" style={{ display: 'none', gap: designTokens.spacing.xs, alignItems: 'center' }}>
            {enabledItems.map((item) => (
              <NavigationLink
                key={item.id}
                href={item.href}
                label={item.label}
                isActive={activeHref === item.href}
                onClick={() => handleLinkClick(item.href)}
                aria-label={`Ir a ${item.label}`}
              />
            ))}

            <a
              href="#contacto"
              className="focus-ring"
              style={{
                textDecoration: 'none',
                color: theme.secondaryColor,
                backgroundColor: '#FF7C1A',
                borderRadius: theme.radius,
                border: '1px solid #FF7C1A',
                fontWeight: 700,
                padding: `${designTokens.spacing.xs} ${designTokens.spacing.sm}`,
                minHeight: '2.25rem',
                display: 'inline-flex',
                alignItems: 'center',
              }}
              onClick={() => handleLinkClick('#contacto')}
              aria-label="Solicitar información"
            >
              Solicitar información
            </a>
          </div>

          <div className="nav-mobile-toggle" style={{ display: 'inline-flex' }}>
            <Button
              variant="ghost"
              size="sm"
              ariaLabel={isMobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-panel"
              onClick={() => setIsMobileMenuOpen((current) => !current)}
              className="focus-ring"
            >
              {isMobileMenuOpen ? 'Cerrar' : 'Menú'}
            </Button>
          </div>
        </div>

        <div id="mobile-navigation-panel">
          <MobileMenu
            isOpen={isMobileMenuOpen}
            items={enabledItems}
            activeHref={activeHref}
            onClose={handleCloseMenu}
          />
        </div>
      </Container>
    </header>
  );
}