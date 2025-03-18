import { defineSlotRecipe } from '@chakra-ui/react';
import { listAnatomy } from '@chakra-ui/react/anatomy';

export const listSlotRecipe = defineSlotRecipe({
  slots: listAnatomy.keys(),

  base: {
    root: {
      marginLeft: 8,
    },
  },

  variants: {
    variant: {
      marker: {
        item: {
          _marker: { color: { base: 'brand.100', _dark: 'brand.900' } },
        },
      },

      slide: {
        root: {
          paddingLeft: '1em',
          listStyle: 'revert',
          marginBottom: '2em',
        },

        item: {
          _marker: { color: 'brand.100' },
        },
      },
    },
  },
});
