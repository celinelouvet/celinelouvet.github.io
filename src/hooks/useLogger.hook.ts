import { useTranslation } from 'react-i18next';

export const useLogger = () => {
  const { i18n } = useTranslation();

  const language = i18n.language;

  const getColorMode = () => {
    const theme = document
      .getElementsByTagName('body')[0]!
      .getAttribute('class');
    return theme?.includes('dark') ? 'dark' : 'light';
  };

  return {
    log: async (
      message: string,
      metadata: Record<string, string | boolean | null | undefined> = {}
    ) => {
      const colorMode = getColorMode();

      const body = { message, metadata: { ...metadata, colorMode, language } };

      if (process.env.NODE_ENV === 'development') {
        console.log('Logging: ', body);
        return;
      }

      return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/logger`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        cache: 'no-store',
      }).catch((res) => console.log('Error logging: ', res));
    },
  };
};
