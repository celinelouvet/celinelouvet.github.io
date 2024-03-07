import { type StyleConfig, type StyleFunctionProps } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const buttonStyle = {
  variants: {
    solid: {
      color: 'white',
      backgroundColor: 'brand.500',
      _hover: { backgroundColor: 'brand.400' },
    },
    outline: (props: StyleFunctionProps) => ({
      backgroundColor: mode('brand.700', 'brand.400')(props),
      _hover: {
        backgroundColor: mode('brand.800', 'brand.300')(props),
      },
    }),
    drawer: (props: StyleFunctionProps) => ({
      fontFamily: 'PT Sans Narrow',
      fontWeight: 400,
      justifyContent: 'flex-start',

      _active: {
        backgroundColor: mode('brand.700', 'brand.400')(props),
      },
      _hover: {
        backgroundColor: mode('brand.900', 'brand.300')(props),
      },
    }),
  },
  sizes: {
    xl: {
      fontSize: 'xl',
      paddingX: '6',
      height: '16',
      borderRadius: 'md',
    },
    '2xl': {
      fontSize: '2xl',
      paddingX: '8',
      height: '16',
      borderRadius: 'lg',
    },
  },
} satisfies StyleConfig;
