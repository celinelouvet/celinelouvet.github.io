import { type ThemingConfig } from '@chakra-ui/react';

const pictureInPx = 200;
const halfPictureInPx = pictureInPx / 2;
const summarySize = pictureInPx * 1.75;
const halfSummarySize = halfPictureInPx * 1.75;

const brand100_rgb = '42, 89, 120';
const brand500_rgb = '74, 144, 191';
const brand900_rgb = '243, 248, 251';
const brandOrange_rgb = '207, 139, 94';

const brandGradient = `180deg, rgba(${brand100_rgb}, 1), rgba(${brand100_rgb}, 1) 93%, rgba(${brand100_rgb}, 0) 93%, rgba(${brand100_rgb}, 0) 96%, rgba(${brand100_rgb}, 1) 96%`;
const strikeBrandGradient = `to right bottom, transparent 47%, rgba(${brand900_rgb}, 1) 47%, rgba(${brand900_rgb}, 1) 49%, rgba(${brand500_rgb}, 1) 49%, rgba(${brand500_rgb}, 1) 51%, rgba(${brand900_rgb}, 1) 51%, rgba(${brand900_rgb}, 1) 53%, transparent 52%`;
const strikeOrangeGradient = `to right bottom, transparent 47%, rgba(${brand900_rgb}, 1) 47%, rgba(${brand900_rgb}, 1) 49%, rgba(${brandOrange_rgb}, 1) 49%, rgba(${brandOrange_rgb}, 1) 51%, rgba(${brand900_rgb}, 1) 51%, rgba(${brand900_rgb}, 1) 53%, transparent 52%`;

export const semanticTokens = {
  gradients: {
    brand: { value: `linear-gradient(${brandGradient})` },
    strike: { value: `linear-gradient(${strikeBrandGradient})` },
    'strike-orange': { value: `linear-gradient(${strikeOrangeGradient})` },
  },
  sizes: {
    'picture.size': { value: `${pictureInPx}px` },
    'picture.size.half': { value: `${halfPictureInPx}px` },
    'summary.size': { value: `${summarySize}px` },
    'summary.size.half': { value: `${halfSummarySize}px` },
  },
  spacing: {
    'neg.picture.space.half': { value: `${-halfPictureInPx}px` },
    'summary.space': { value: `${summarySize}px` },
  },
} as ThemingConfig['semanticTokens'];
