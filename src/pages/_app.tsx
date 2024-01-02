import { ChakraProvider } from '@chakra-ui/react';
import { type AppProps } from 'next/app';

import { Header } from '@/components/features';
import theme from '@/theme';
import '@/lib/i18n/config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
