import { defineRecipe } from '@chakra-ui/react';

export const headerContainerRecipe = defineRecipe({
  base: {
    width: { base: '100%', md: '720px', lg: '960px', xl: '1320px' },
    maxWidth: { base: '100%', md: '720px', lg: '960px', xl: '1320px' },
    paddingLeft: { base: '12px', md: '0', lg: '0', xl: '0' },
    paddingRight: { base: '12px', md: '0', lg: '0', xl: '0' },
  },
});
