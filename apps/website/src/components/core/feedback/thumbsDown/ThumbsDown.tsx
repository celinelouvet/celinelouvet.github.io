import {
  Alert,
  Box,
  type SlotRecipeProps,
  useSlotRecipe,
} from '@chakra-ui/react';
import * as React from 'react';
import { FaThumbsDown } from 'react-icons/fa';

type ThumbsDownVariantProps = SlotRecipeProps<'thumbsDown'> & {
  title?: string;
};

export interface ThumbsDownProps
  extends Alert.RootProps,
    React.PropsWithChildren<ThumbsDownVariantProps> {}

export const ThumbsDown = React.forwardRef<HTMLDivElement, ThumbsDownProps>(
  function ThumbsDown(props, ref) {
    const { title, children, ...restProps } = props;

    const recipe = useSlotRecipe({ key: 'thumbsDown' });
    const styles = recipe(restProps);

    return (
      <Alert.Root status="warning" css={styles.root} ref={ref} {...restProps}>
        <Alert.Indicator css={styles.indicator} as={FaThumbsDown} />
        <Box width="100%" height="100%">
          {title ? <Alert.Title css={styles.title}>{title}</Alert.Title> : null}
          <Alert.Description css={styles.description}>
            {children}
          </Alert.Description>
        </Box>
      </Alert.Root>
    );
  },
);
