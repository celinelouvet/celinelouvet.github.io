import { type ChakraTheme } from '@chakra-ui/react';

import { pageContainerStyles } from './PageContainer';

export const pageContainerComponent = {
  PageContainer: pageContainerStyles,
} satisfies ChakraTheme['components'];

export { PageContainer } from './PageContainer';
