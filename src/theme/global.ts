import {
  type GlobalStyles,
  type StyleFunctionProps,
  mode,
} from '@chakra-ui/theme-tools';

const nunito = 'Nunito';

export const global = (props: StyleFunctionProps) =>
  ({
    body: {
      bg: mode('white', 'brand.100')(props),
      color: mode('brand.100', 'brand.900')(props),
      fontFamily: nunito,
      fontSize: '14px',
      fontWeight: '400',
    },
    p: {
      marginBottom: '4',
    },
  }) satisfies GlobalStyles['global'];
