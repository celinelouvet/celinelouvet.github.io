import {
  Button,
  type ButtonProps,
  type RecipeVariantProps,
  useRecipe,
} from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';

import { headerDrawerButtonRecipe } from './HeaderDrawerButton.recipe';
import { type Section } from '../../sections';

type HeaderDrawerButtonVariantProps = RecipeVariantProps<
  typeof headerDrawerButtonRecipe
> & { section: Section };

export interface HeaderDrawerButtonProps
  extends ButtonProps,
    React.PropsWithChildren<HeaderDrawerButtonVariantProps> {}

export const HeaderDrawerButton = React.forwardRef<
  HTMLButtonElement,
  HeaderDrawerButtonProps
>(function (props, ref) {
  const { section, ...restProps } = props;

  const recipe = useRecipe({ recipe: headerDrawerButtonRecipe });
  const styles = recipe(restProps);

  const { t } = useTranslation('header', { keyPrefix: 'nav' });

  return (
    <Button
      asChild
      size="2xl"
      variant="plain"
      ref={ref}
      css={styles}
      {...restProps}
    >
      <NavLink to={section.to}>{t(section.slug)}</NavLink>
    </Button>
  );
});
