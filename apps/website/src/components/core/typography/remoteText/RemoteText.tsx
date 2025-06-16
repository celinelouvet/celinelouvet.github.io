import {
  Box,
  type RecipeVariantProps,
  type TextProps,
  chakra,
  useRecipe,
} from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import type { RemoteType } from '@/data';

import { remoteTextRecipe } from './RemoteText.recipe';

type RemoteTextVariantProps = RecipeVariantProps<typeof remoteTextRecipe> & {
  remote?: RemoteType;
};

export interface RemoteTextProps
  extends Omit<TextProps, 'children'>,
    React.PropsWithChildren<RemoteTextVariantProps> {}

export const RemoteText = React.forwardRef<HTMLSpanElement, RemoteTextProps>(
  function RemoteText(props, ref) {
    const { remote, ...restProps } = props;

    const { t } = useTranslation('common', { keyPrefix: 'remoteType' });
    const recipe = useRecipe({ recipe: remoteTextRecipe });
    const styles = recipe(restProps);

    if (!remote || remote === 'NONE') {
      return null;
    }

    return (
      <chakra.span css={styles} {...restProps} ref={ref}>
        <Box display={{ base: 'none', md: 'inline', _print: 'inline' }}>
          <chakra.span marginRight="2">—</chakra.span>
        </Box>
        <chakra.span>{t(remote)}</chakra.span>
      </chakra.span>
    );
  },
);
