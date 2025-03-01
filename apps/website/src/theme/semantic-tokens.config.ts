import { type ThemingConfig } from '@chakra-ui/react';

const pictureInPx = 200;
const halfPictureInPx = pictureInPx / 2;
const summarySize = pictureInPx * 1.75;

const brand100_rgb = '42, 89, 120';
const brandGradient = `180deg, rgba(${brand100_rgb}, 1), rgba(${brand100_rgb}, 1) 93%, rgba(${brand100_rgb}, 0) 93%, rgba(${brand100_rgb}, 0) 96%, rgba(${brand100_rgb}, 1) 96%`;

export const semanticTokens = {
  gradients: {
    brand: { value: `linear-gradient(${brandGradient})` },
  },
  sizes: {
    'picture.size': { value: `${pictureInPx}px` },
    'picture.size.half': { value: `${halfPictureInPx}px` },
    'summary.size': { value: `${summarySize}px` },
  },
  spacing: {
    'neg.picture.space.half': { value: `${-halfPictureInPx}px` },
    'summary.space': { value: `${summarySize}px` },
  },
} as ThemingConfig['semanticTokens'];
