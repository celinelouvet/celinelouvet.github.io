import { ColorModeScript } from '@chakra-ui/react';
import { Head, Html, Main, NextScript } from 'next/document';

import i18next from '@/lib/i18n/config';
import theme from '@/theme';

export default function Document() {
  return (
    <Html lang={i18next.language}>
      <Head />
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
