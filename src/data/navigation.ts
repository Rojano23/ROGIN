import type { FeatureFlags, NavigationItem } from '../types';

export const navigationItems: NavigationItem[] = [
  {
    id: 'home',
    label: 'Inicio',
    href: '#inicio',
  },
  {
    id: 'about',
    label: 'Nosotros',
    href: '#nosotros',
    featureKey: 'about',
  },
  {
    id: 'courses',
    label: 'Cursos',
    href: '#cursos',
    featureKey: 'services',
  },
  {
    id: 'specialist',
    label: 'Especialista',
    href: '#especialista',
  },
  {
    id: 'clients',
    label: 'Clientes',
    href: '#clientes',
  },
  {
    id: 'contact',
    label: 'Contacto',
    href: '#contacto',
  },
];

export function getEnabledNavigationItems(
  items: NavigationItem[],
  featureFlags: FeatureFlags,
): NavigationItem[] {
  return items.filter((item) => {
    if (!item.featureKey) {
      return true;
    }

    return featureFlags[item.featureKey];
  });
}