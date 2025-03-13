import {
  Button,
  type ButtonProps,
  type RecipeVariantProps,
  useRecipe,
} from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';

import { headerButtonRecipe } from './HeaderButton.recipe';
import { type Section } from '../../sections';

type HeaderButtonVariantProps = RecipeVariantProps<
  typeof headerButtonRecipe
> & { section: Section };

export interface HeaderButtonProps
  extends ButtonProps,
    React.PropsWithChildren<HeaderButtonVariantProps> {}

export const HeaderButton = React.forwardRef<
  HTMLButtonElement,
  HeaderButtonProps
>(function (props, ref) {
  const { section, ...restProps } = props;

  const recipe = useRecipe({ recipe: headerButtonRecipe });
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
