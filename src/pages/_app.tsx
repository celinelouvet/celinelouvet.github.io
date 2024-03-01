import { ChakraProvider } from '@chakra-ui/react';
import { type AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Header } from '@/components/features';
import { log } from '@/lib/clientLogger';
import theme from '@/theme';

import '@/lib/i18n/config';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { i18n } = useTranslation();

  useEffect(() => {
    log('Routing', { path: router.asPath, language: i18n.language });
  }, [router, i18n.language]);

  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
