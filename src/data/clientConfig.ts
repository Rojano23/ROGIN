import type { ClientConfig } from '../types';

import { company } from './company';
import { contentAlignment } from './contentAlignment';
import { features } from './features';
import { gallery } from './gallery';
import { industries } from './industries';
import { projects } from './projects';
import { seo } from './seo';
import { services } from './services';
import { theme } from './theme';

export const clientConfig: ClientConfig = {
  company,
  branding: theme,
  seo,
  services,
  industries,
  projects,
  gallery,
  contact: {
    phone: company.phone,
    email: company.email,
    address: company.address,
    businessHours: company.businessHours,
    googleMapsUrl: company.googleMapsUrl,
  },
  socialLinks: company.socialLinks,
  featureFlags: features,
  contentAlignment,
};

export function createClientConfig(overrides: Partial<ClientConfig> = {}): ClientConfig {
  return {
    ...clientConfig,
    ...overrides,
    company: {
      ...clientConfig.company,
      ...(overrides.company ?? {}),
    },
    branding: {
      ...clientConfig.branding,
      ...(overrides.branding ?? {}),
    },
    seo: {
      ...clientConfig.seo,
      ...overrides.seo,
    },
    contact: {
      ...clientConfig.contact,
      ...(overrides.contact ?? {}),
    },
    socialLinks: {
      ...clientConfig.socialLinks,
      ...(overrides.socialLinks ?? {}),
    },
    featureFlags: {
      ...clientConfig.featureFlags,
      ...(overrides.featureFlags ?? {}),
    },
    gallery: {
      ...clientConfig.gallery,
      ...(overrides.gallery ?? {}),
      brands: overrides.gallery?.brands ?? clientConfig.gallery.brands,
      products: overrides.gallery?.products ?? clientConfig.gallery.products,
    },
    contentAlignment: {
      ...clientConfig.contentAlignment,
      ...(overrides.contentAlignment ?? {}),
      sections: {
        ...(clientConfig.contentAlignment.sections ?? {}),
        ...(overrides.contentAlignment?.sections ?? {}),
      },
    },
  };
}