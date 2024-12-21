export type Languages = "en" | "fr";

export const FALLBACK_LANGUAGE: Languages = "fr";
export const LANGUAGES: Languages[] = [FALLBACK_LANGUAGE, "en"];
export const DEFAULT_NAMESPACE = "common";
export const COOKIE_NAME = "i18next";

export const getOptions = (
  language: Languages = FALLBACK_LANGUAGE,
  namespace: string | string[] = DEFAULT_NAMESPACE
) => {
  return {
    // debug: true,
    supportedLngs: LANGUAGES,
    fallbackLng: FALLBACK_LANGUAGE,
    lng: language,
    fallbackNS: DEFAULT_NAMESPACE,
    defaultNS: DEFAULT_NAMESPACE,
    ns: namespace,
  };
};
