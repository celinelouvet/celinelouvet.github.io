import { type ChakraTheme } from '@chakra-ui/react';

const pictureInPx = 200;
const halfPictureInPx = pictureInPx / 2;
const summarySize = pictureInPx * 1.75;

const brand100_rgb = '42, 89, 120';

export const semanticTokens = {
  colors: {
    brandGradient: `180deg, rgba(${brand100_rgb}, 1), rgba(${brand100_rgb}, 1) 93%, rgba(${brand100_rgb}, 0) 93%, rgba(${brand100_rgb}, 0) 96%, rgba(${brand100_rgb}, 1) 96%`,
  },
  sizes: {
    'picture.size': `${pictureInPx}px`,
    'picture.size.half': `${halfPictureInPx}px`,
    'summary.size': `${summarySize}px`,
  },
  space: {
    'neg.picture.space.half': `${-halfPictureInPx}px`,
    'summary.space': `${summarySize}px`,
  },
} as ChakraTheme['semanticTokens'];
