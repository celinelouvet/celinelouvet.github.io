import { type SystemConfig } from '@chakra-ui/react';

const nunito = 'Nunito';

export const globalCss = {
  body: {
    bg: { base: 'white', _dark: 'brand.100' },
    color: { base: 'brand.100', _dark: 'brand.900' },
    fontFamily: nunito,
    fontWeight: '400',

    _print: {
      fontSize: '11pt',
    },
  },
} satisfies SystemConfig['globalCss'];
