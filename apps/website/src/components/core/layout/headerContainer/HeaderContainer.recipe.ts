import { defineRecipe } from '@chakra-ui/react';

export const headerContainerRecipe = defineRecipe({
  base: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    width: '100%',
    maxWidth: '100%',
    paddingLeft: '12px',
    paddingRight: '12px',
    paddingTop: '1.5',
    paddingBottom: '1.5',

    md: {
      width: '720px',
      maxWidth: '720px',
      paddingLeft: '0',
      paddingRight: '0',
    },

    lg: {
      width: '960px',
      maxWidth: '960px',
      paddingLeft: '0',
      paddingRight: '0',
    },

    xl: {
      width: '1320px',
      maxWidth: '1320px',
      paddingLeft: '0',
      paddingRight: '0',
    },
  },
});
