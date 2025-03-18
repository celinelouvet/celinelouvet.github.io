import { defineSlotRecipe } from '@chakra-ui/react';
import { avatarAnatomy } from '@chakra-ui/react/anatomy';

export const pictureSlotRecipe = defineSlotRecipe({
  slots: avatarAnatomy.keys(),

  base: {
    root: {
      width: 'picture.size',
      height: 'picture.size',
      border: '3px solid white',
    },
  },

  variants: {
    size: {
      md: { root: { width: 'picture.size.half', height: 'picture.size.half' } },
      lg: { root: { width: 'picture.size', height: 'picture.size' } },
      full: {
        root: { width: '100%', height: '100%', border: '5px solid white' },
      },
    },
  },
  defaultVariants: { size: 'md' },
});
