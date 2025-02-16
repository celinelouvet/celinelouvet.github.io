import { Avatar, type SlotRecipeProps, useSlotRecipe } from '@chakra-ui/react';
import * as React from 'react';

type PictureVariantProps = SlotRecipeProps<'picture'>;

export interface PictureProps
  extends Omit<Avatar.RootProps, 'size'>,
    React.PropsWithChildren<PictureVariantProps> {}

export const Picture = React.forwardRef<HTMLDivElement, PictureProps>(
  function (props, ref) {
    const { size, ...restProps } = props;
    const recipe = useSlotRecipe({ key: 'picture' });
    const styles = recipe(props);

    return (
      <Avatar.Root css={styles.root} size={size} ref={ref} {...restProps}>
        <Avatar.Fallback name="Céline Louvet" css={styles.fallback} />
        <Avatar.Image src="/square-gray.png" css={styles.image} />
      </Avatar.Root>
    );
  },
);
