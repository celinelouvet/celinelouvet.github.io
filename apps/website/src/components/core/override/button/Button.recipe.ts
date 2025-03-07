import { defineRecipe } from '@chakra-ui/react';

export const buttonRecipe = defineRecipe({
  variants: {
    variant: {
      solid: {
        color: 'white',
        backgroundColor: 'brand.500',
        _hover: { backgroundColor: 'brand.400' },
        _active: { backgroundColor: 'brand.600' },
        _expanded: { backgroundColor: 'brand.600' },
      },

      outline: {
        backgroundColor: { base: 'brand.700', _dark: 'brand.400' },
        _hover: {
          backgroundColor: { base: 'brand.800', _dark: 'brand.300' },
        },
      },

      'solid-link': {
        color: 'white',
        backgroundColor: 'brand.500',

        _dark: { color: 'white' },
        _hover: {
          textDecoration: 'underline',

          color: 'white',
          backgroundColor: 'brand.400',

          _dark: { color: 'white', backgroundColor: 'brand.400' },
        },
        _active: { backgroundColor: 'brand.600' },
        _expanded: { backgroundColor: 'brand.600' },
      },
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
  },
});
