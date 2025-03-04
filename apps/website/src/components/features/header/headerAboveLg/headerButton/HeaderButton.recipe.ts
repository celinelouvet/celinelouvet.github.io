import { defineRecipe } from '@chakra-ui/react';

export const headerButtonRecipe = defineRecipe({
  base: {
    fontFamily: 'PT Sans Narrow',
    fontWeight: 400,
    fontSize: '2xl',
    color: 'brand.900',

    '&.active': {
      backgroundColor: 'brand.300',
      cursor: 'default',
      _hover: {
        backgroundColor: 'brand.300',
        filter: 'none',
      },
    },

    _hover: {
      backgroundColor: 'brand.400',
      filter: 'brightness(1.25)',
    },
  },
});
