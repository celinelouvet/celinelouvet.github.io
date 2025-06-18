import { type ThemingConfig } from '@chakra-ui/react';

const sizes = {
  25: { value: '0.25em' },
  50: { value: '0.5em' },
  75: { value: '0.75em' },
  100: { value: '1em' },
  110: { value: '1.1em' }, // to be removed
  115: { value: '1.15em' },
  120: { value: '1.2em' },
  125: { value: '1.25em' },
  130: { value: '1.3em' },
  140: { value: '1.4em' },
  150: { value: '1.5em' },
  170: { value: '1.7em' },
  175: { value: '1.75em' },
  200: { value: '2em' },
  225: { value: '2.25em' },
  250: { value: '2.5em' },
  275: { value: '2.75em' },
  300: { value: '3em' },
  400: { value: '4em' },
  500: { value: '5em' },
  800: { value: '8em' },
  1000: { value: '10em' },
};

export const tokens = {
  colors: {
    brand: {
      100: { value: '#102330' },
      200: { value: '#152c3c' },
      300: { value: '#1f435a' },
      400: { value: '#2a5978' },
      500: { value: '#4990bf' },
      600: { value: '#94beda' },
      700: { value: '#bad5e7' },
      800: { value: '#d5e5f0' },
      900: { value: '#f3f8fb' },
      red: { value: '#CC5152' },
      green: { value: '#517C71' },
      orange: { value: '#CF8B5E' },
      yellow: { value: '#EEE079' },
    },
  },
  fontSizes: {
    brand: sizes,
  },
  sizes: {
    brand: sizes,
  },
  spacing: {
    brand: sizes,
  },
} as ThemingConfig['tokens'];
