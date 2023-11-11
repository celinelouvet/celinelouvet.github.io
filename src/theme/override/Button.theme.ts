import { type StyleConfig } from '@chakra-ui/react';

export const buttonStyle = {
  variants: {
    solid: {
      color: 'white',
      backgroundColor: 'brand.500',
      _hover: { backgroundColor: 'brand.400' },
    },
  },
} satisfies StyleConfig;
