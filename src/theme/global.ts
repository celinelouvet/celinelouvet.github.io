import {
  type GlobalStyles,
  type StyleFunctionProps,
  mode,
} from '@chakra-ui/theme-tools';

const nunito = 'Nunito';

export const global = (props: StyleFunctionProps) =>
  ({
    body: {
      color: mode('brand.100', 'brand.900')(props),
      fontFamily: nunito,
      fontSize: '14px',
      fontWeight: '400',
    },
    p: {
      marginBottom: '4',
    },
  }) satisfies GlobalStyles['global'];
