import type { CSSProperties } from 'react';

import type { NavigationItem } from '../../types';
import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';
import { NavigationLink } from './NavigationLink';

export interface MobileMenuProps {
  isOpen: boolean;
  items: NavigationItem[];
  onClose: () => void;
  activeHref?: string;
}

export function MobileMenu({ isOpen, items, onClose, activeHref }: MobileMenuProps) {
  const panelStyle: CSSProperties = {
    display: isOpen ? 'grid' : 'none',
    gap: designTokens.spacing.sm,
    border: `1px solid ${theme.borderColor}`,
    borderRadius: designTokens.radius.md,
    backgroundColor: theme.secondaryColor,
    padding: designTokens.spacing.sm,
    boxShadow: theme.shadow,
  };

  return (
    <div aria-hidden={!isOpen} className="nav-mobile-panel" style={panelStyle}>
      {items.map((item) => (
        <NavigationLink
          key={item.id}
          href={item.href}
          label={item.label}
          isActive={activeHref === item.href}
          onClick={onClose}
          aria-label={`Ir a ${item.label}`}
          style={{ justifyContent: 'flex-start', width: '100%' }}
        />
      ))}

      <a
        href="#contacto"
        className="focus-ring"
        style={{
          width: '100%',
          display: 'inline-flex',
          justifyContent: 'center',
          textDecoration: 'none',
          color: theme.secondaryColor,
          backgroundColor: '#FF7C1A',
          border: '1px solid #FF7C1A',
          borderRadius: designTokens.radius.sm,
          padding: `${designTokens.spacing.sm} ${designTokens.spacing.md}`,
          fontWeight: 700,
        }}
        onClick={onClose}
      >
        Solicitar información
      </a>
    </div>
  );
}