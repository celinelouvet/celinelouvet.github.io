import { switchAnatomy } from '@chakra-ui/anatomy';
import {
  type StyleFunctionProps,
  createMultiStyleConfigHelpers,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = (props: StyleFunctionProps) =>
  definePartsStyle({
    track: {
      bg: mode('brand.700', 'brand.300')(props),
      borderColor: mode('brand.700', 'brand.400')(props),
      borderWidth: '1px',

      _checked: {
        bg: 'brand.500',
        borderColor: 'brand.500',
      },
    },
  });

export const switchStyle = defineMultiStyleConfig({ baseStyle });
