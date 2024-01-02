import { type ChakraTheme } from '@chakra-ui/react';

import { blogBreadcrumbStyles } from './BlogBreadcrumb';

export const blogBreadcrumbComponent = {
  BlogBreadcrumb: blogBreadcrumbStyles,
} satisfies ChakraTheme['components'];

export { BlogBreadcrumb } from './BlogBreadcrumb';
