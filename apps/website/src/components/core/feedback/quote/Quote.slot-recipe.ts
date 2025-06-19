import { defineSlotRecipe } from '@chakra-ui/react';
import { alertAnatomy } from '@chakra-ui/react/anatomy';

export const quoteSlotRecipe = defineSlotRecipe({
  slots: alertAnatomy.keys(),

  variants: {
    variant: {
      subtle: {
        root: {
          backgroundColor: { base: 'brand.700', _dark: 'brand.300' },
          color: { base: 'brand.200', _dark: 'brand.700' },
        },
        indicator: {
          color: { base: 'brand.400', _dark: 'brand.800' },
        },
      },
      surface: {
        root: {
          backgroundColor: { base: 'brand.700', _dark: 'brand.300' },
          color: { base: 'brand.200', _dark: 'brand.700' },
          borderColor: 'brand.500',
          shadowColor: 'brand.500',
        },
        indicator: {
          color: { base: 'brand.400', _dark: 'brand.800' },
        },
      },
      solid: {
        root: {
          backgroundColor: { base: 'brand.400', _dark: 'brand.700' },
          color: { base: 'brand.900', _dark: 'brand.200' },
        },
        indicator: {
          color: { base: 'brand.900', _dark: 'brand.300' },
        },
      },
      outline: {
        root: {
          color: { base: 'brand.200', _dark: 'brand.800' },
          borderColor: { base: 'brand.400', _dark: 'brand.600' },
          shadowColor: { base: 'brand.400', _dark: 'brand.600' },
        },
        description: {
          colorPalette: 'brand',
          lineHeight: 'brand.150',
        },
        indicator: {
          colorPalette: 'brand',
          color: { base: 'brand.300', _dark: 'brand.800' },
        },
      },

      slide: {
        root: {
          fontSize: 'brand.100',
          lineHeight: '1.5',
          borderRadius: 'md',
          backgroundColor: { base: 'brand.800', _dark: 'brand.800' },
          borderLeftColor: { base: 'brand.400', _dark: 'brand.500' },
          color: { base: 'brand.200', _dark: 'brand.200' },
        },
        indicator: {
          fontSize: 'brand.100',
          color: { base: 'brand.300', _dark: 'brand.300' },
        },
      },

      rightSlide: {
        root: {
          fontSize: 'brand.100',
          lineHeight: '1.5',
          borderRadius: 'md',
          backgroundColor: { base: 'brand.800', _dark: 'brand.800' },
          borderRightColor: { base: 'brand.400', _dark: 'brand.500' },
          color: { base: 'brand.200', _dark: 'brand.200' },
        },
        indicator: {
          fontSize: 'brand.100',
          color: { base: 'brand.300', _dark: 'brand.300' },
        },
      },
    },
  },
  defaultVariants: {
    variant: 'subtle',
  },
});
