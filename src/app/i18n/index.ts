import { createInstance, FlatNamespace, KeyPrefix, Namespace } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { DEFAULT_NAMESPACE, getOptions, Languages } from "./settings";
import { FallbackNs } from "react-i18next";

export * from "./settings";

const initI18next = async (language: string, namespace: string | string[]) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string | string[]) =>
          import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(language as Languages, namespace));
  return i18nInstance;
};

type $Tuple<T> = readonly [T?, ...T[]];
type $FirstNamespace<Ns extends Namespace> = Ns extends readonly unknown[]
  ? Ns[0]
  : Ns;

export async function useTranslation<
  Ns extends FlatNamespace | $Tuple<FlatNamespace>,
  KPrefix extends KeyPrefix<
    FallbackNs<
      Ns extends FlatNamespace ? FlatNamespace : $FirstNamespace<FlatNamespace>
    >
  > = undefined
>(
  language: string,
  namespace: Ns = DEFAULT_NAMESPACE as Ns,
  options: { keyPrefix?: KPrefix } = {}
) {
  const i18nextInstance = await initI18next(language, namespace as string);
  return {
    t: i18nextInstance.getFixedT(
      language,
      Array.isArray(namespace) ? namespace[0] : namespace,
      options.keyPrefix
    ),
    i18n: i18nextInstance,
  };
}
