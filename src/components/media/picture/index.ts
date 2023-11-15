import { type ChakraTheme } from '@chakra-ui/react';

import { pictureStyles } from './Picture';

export const pictureComponent = {
  Picture: pictureStyles,
} satisfies ChakraTheme['components'];

export { Picture } from './Picture';
