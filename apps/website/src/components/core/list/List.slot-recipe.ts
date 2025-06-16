import { defineSlotRecipe } from '@chakra-ui/react';
import { listAnatomy } from '@chakra-ui/react/anatomy';

export const listSlotRecipe = defineSlotRecipe({
  slots: listAnatomy.keys(),

  base: {
    root: {
      base: {
        marginLeft: 1,
      },
      md: {
        marginLeft: 8,
      },
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
          paddingLeft: 'brand.100',
          listStyle: 'revert',
          marginBottom: 'brand.200',
        },

        item: {
          _marker: { color: 'brand.100' },
        },
      },
    },
  },
});
