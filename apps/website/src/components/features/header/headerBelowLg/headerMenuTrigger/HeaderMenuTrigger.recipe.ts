import { defineRecipe } from '@chakra-ui/react';

export const headerMenuTriggerRecipe = defineRecipe({
  base: {
    color: 'brand.900',
    backgroundColor: 'brand.400',

    _hover: {
      backgroundColor: 'brand.500',
    },
  },
});
