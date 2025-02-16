import { defineSlotRecipe } from '@chakra-ui/react';
import { alertAnatomy } from '@chakra-ui/react/anatomy';

export const quoteSlotRecipe = defineSlotRecipe({
  slots: alertAnatomy.keys(),

  base: {
    root: {
      colorPalette: 'brand',
      borderRadius: 'md',
    },
    description: {
      colorPalette: 'brand',
      lineHeight: '1.5em',
    },
    indicator: {
      colorPalette: 'brand',
    },
    title: {
      colorPalette: 'brand',
      lineHeight: '1.5em',
      marginBottom: '0.5em',
    },
  },

  variants: {
    variant: {
      subtle: {
        root: {
          backgroundColor: 'brand.700',
          color: 'brand.200',

          _dark: {
            backgroundColor: 'brand.300',
            color: 'brand.700',
          },
        },
        indicator: {
          color: 'brand.400',

          _dark: {
            color: 'brand.800',
          },
        },
      },
      surface: {
        root: {
          backgroundColor: 'brand.700',
          color: 'brand.200',
          borderColor: 'brand.500',
          shadowColor: 'brand.500',

          _dark: {
            backgroundColor: 'brand.300',
            color: 'brand.700',
          },
        },
        indicator: {
          color: 'brand.400',

          _dark: {
            color: 'brand.800',
          },
        },
      },
      solid: {
        root: {
          backgroundColor: 'brand.400',
          color: 'brand.900',

          _dark: {
            backgroundColor: 'brand.700',
            color: 'brand.200',
          },
        },
        indicator: {
          color: 'brand.900',

          _dark: {
            color: 'brand.300',
          },
        },
      },
      outline: {
        root: {
          color: 'brand.200',
          borderColor: 'brand.400',
          shadowColor: 'brand.400',

          _dark: {
            color: 'brand.800',
            borderColor: 'brand.600',
            shadowColor: 'brand.600',
          },
        },
        description: {
          colorPalette: 'brand',
          lineHeight: '1.5em',
        },
        indicator: {
          colorPalette: 'brand',
          color: 'brand.300',

          _dark: {
            color: 'brand.800',
          },
        },
      },

      slide: {
        root: {
          borderRadius: '0.25em',
          backgroundColor: 'brand.800',
          borderLeftColor: 'brand.400',
          borderLeftWidth: '0.25em',
          borderLeftStyle: 'solid',
          fontSize: '1em',
          color: 'brand.200',

          _dark: {
            backgroundColor: 'brand.800',
            borderLeftColor: 'brand.500',
            color: 'brand.200',
          },
        },
        indicator: {
          color: 'brand.300',
          boxSize: '1em',
          marginRight: '1em',

          _dark: {
            color: 'brand.300',
          },
        },
        title: {
          lineHeight: '1.5em',
          marginBottom: '0.5em',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'subtle',
  },
});
