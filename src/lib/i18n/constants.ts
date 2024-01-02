import type locales from '@/locales';

export type Language = {
  key: keyof typeof locales;
};

export const DEFAULT_NAMESPACE = 'common';

export const DEFAULT_LANGUAGE_KEY: Language['key'] = 'en';

export const AVAILABLE_LANGUAGES: Language[] = [{ key: 'en' }, { key: 'fr' }];
