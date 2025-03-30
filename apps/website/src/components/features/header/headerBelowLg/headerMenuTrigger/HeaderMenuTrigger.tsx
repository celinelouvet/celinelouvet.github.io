import {
  Icon,
  IconButton,
  type IconButtonProps,
  type RecipeVariantProps,
  useRecipe,
} from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { BsList } from 'react-icons/bs';

import { headerMenuTriggerRecipe } from './HeaderMenuTrigger.recipe';

type HeaderMenuTriggerVariantProps = RecipeVariantProps<
  typeof headerMenuTriggerRecipe
> & {
  open: boolean;
  toggle: () => void;
};

export interface HeaderMenuTriggerProps
  extends Omit<IconButtonProps, 'children'>,
    React.PropsWithChildren<HeaderMenuTriggerVariantProps> {}

export const HeaderMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  HeaderMenuTriggerProps
>(function HeaderMenuTrigger(props, ref) {
  const { open, toggle } = props;

  const recipe = useRecipe({ recipe: headerMenuTriggerRecipe });
  const styles = recipe(props);

  const { t } = useTranslation('header', { keyPrefix: 'nav' });
  const buttonLabel = t(open ? 'open' : 'close');

  return (
    <IconButton
      aria-label={buttonLabel}
      onClick={() => toggle()}
      size="2xl"
      variant="plain"
      ref={ref}
      css={styles}
      {...props}
    >
      <Icon as={BsList} />
    </IconButton>
  );
});
