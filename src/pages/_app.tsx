import { ChakraProvider } from '@chakra-ui/react';
import { type AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Header } from '@/components/features';
import { useLogger } from '@/hooks';
import theme from '@/theme';

import '@/lib/i18n/config';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { log } = useLogger();

  useEffect(() => {
    log('Routing', { path: router.asPath });
  }, [router, log]);

  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
