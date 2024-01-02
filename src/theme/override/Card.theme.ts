import { type StyleConfig, type StyleFunctionProps } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const cardStyle = {
  variants: {
    filled: (props: StyleFunctionProps) => ({
      container: {
        backgroundColor: mode('brand.900', 'brand.200')(props),
      },
      header: {
        paddingBottom: 0,
      },
      body: {
        paddingTop: 0,
      },
    }),
    outline: (props: StyleFunctionProps) => ({
      header: {
        backgroundColor: mode('brand.900', 'brand.200')(props),
      },
    }),
  },
} satisfies StyleConfig;
