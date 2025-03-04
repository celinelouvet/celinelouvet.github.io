import { defineRecipe } from '@chakra-ui/react';

export const headerDrawerButtonRecipe = defineRecipe({
  base: {
    fontFamily: 'PT Sans Narrow',
    fontWeight: 400,
    fontSize: '2xl',
    borderRadius: 'md',
    justifyContent: 'flex-start',

    color: { base: 'brand.100', _dark: 'brand.900' },

    '&.active': {
      backgroundColor: { base: 'brand.700', _dark: 'brand.400' },
      cursor: 'default',

      _hover: {
        backgroundColor: { base: 'brand.700', _dark: 'brand.400' },
      },
    },

    _hover: {
      backgroundColor: { base: 'brand.800', _dark: 'brand.300' },
    },
  },
});
