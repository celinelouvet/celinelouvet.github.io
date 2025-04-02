import { useTranslation } from 'react-i18next';

import { useApi } from './useApi.hook';

export const useLogger = () => {
  const { post } = useApi();
  const { i18n } = useTranslation();

  const language = i18n.language;

  return {
    log: async (
      message: string,
      metadata: Record<string, string | boolean | null | undefined> = {},
    ) => {
      const theme = document
        .getElementsByTagName('body')[0]!
        .getAttribute('class');

      const colorMode = theme?.includes('dark') ? 'dark' : 'light';
      const body = { message, metadata: { ...metadata, colorMode, language } };

      if (__DEV__) {
        console.log('Logging: ', body);
      } else {
        await post('/logger', body).catch((res) =>
          console.log('Error logging: ', res),
        );
      }
    },
  };
};
