export type Languages = 'en' | 'fr';
export type Language = {
  key: Languages;
};

export const AVAILABLE_LANGUAGES: Language[] = [{ key: 'en' }, { key: 'fr' }];
export const DEFAULT_LANGUAGE_KEY: Languages = 'fr';

export const DEFAULT_NAMESPACE = 'common';
