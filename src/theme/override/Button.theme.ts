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
  },
} satisfies StyleConfig;
