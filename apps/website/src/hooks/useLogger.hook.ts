import { useTranslation } from 'react-i18next';

import { useApi } from './useApi.hook';

export const useLogger = () => {
  const { post } = useApi();
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
      metadata: Record<string, string | boolean | null | undefined> = {},
    ) => {
      const colorMode = getColorMode();

      const body = { message, metadata: { ...metadata, colorMode, language } };

      return post('/logger', body).catch((res) =>
        console.log('Error logging: ', res),
      );
    },
  };
};
