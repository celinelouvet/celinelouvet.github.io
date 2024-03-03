import { useTranslation } from 'react-i18next';

export const useLogger = () => {
  const { i18n } = useTranslation();
  const language = i18n.language;

  return {
    log: (
      message: string,
      metadata: Record<string, string | boolean | null | undefined> = {}
    ) => {
      const body = { message, metadata: { ...metadata, language } };

      return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/logger`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        cache: 'no-store',
      }).catch((res) => console.log('Error logging: ', res));
    },
  };
};
