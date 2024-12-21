"use client";

import { useEffect, useState } from "react";
import i18next, { FlatNamespace, KeyPrefix } from "i18next";
import {
  FallbackNs,
  initReactI18next,
  UseTranslationOptions,
  useTranslation as useTranslationOrg,
  UseTranslationResponse,
} from "react-i18next";
import { useCookies } from "react-cookie";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import {
  getOptions,
  LANGUAGES,
  COOKIE_NAME,
  DEFAULT_NAMESPACE,
  Languages,
} from "./settings";

const runsOnServerSide = typeof window === "undefined";

// eslint-disable-next-line import/no-named-as-default-member
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: Languages, namespace: string | string[]) =>
        import(`./locales/${language}/${namespace}.json`)
    )
  )
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: {
      order: ["path", "htmlTag", "cookie", "navigator"],
    },
    preload: runsOnServerSide ? LANGUAGES : [],
  });

export function useTranslation<
  Ns extends FlatNamespace,
  KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined
>(
  language: string,
  namespace: Ns = DEFAULT_NAMESPACE as Ns,
  options?: UseTranslationOptions<KPrefix>
): UseTranslationResponse<FallbackNs<Ns>, KPrefix> {
  const [cookies, setCookie] = useCookies([COOKIE_NAME]);
  const ret = useTranslationOrg(namespace, options);

  const { i18n } = ret;

  if (runsOnServerSide && language && i18n.resolvedLanguage !== language) {
    i18n.changeLanguage(language);
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (activeLng === i18n.resolvedLanguage) return;
      setActiveLng(i18n.resolvedLanguage);
    }, [activeLng, i18n.resolvedLanguage]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!language || i18n.resolvedLanguage === language) return;
      i18n.changeLanguage(language);
    }, [language, i18n]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (cookies.i18next === language) return;
      setCookie(COOKIE_NAME, language, { path: "/" });
    }, [language, cookies.i18next, setCookie]);
  }
  return ret;
}
