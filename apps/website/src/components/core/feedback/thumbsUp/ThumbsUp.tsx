import {
  Alert,
  Box,
  type SlotRecipeProps,
  useSlotRecipe,
} from '@chakra-ui/react';
import * as React from 'react';
import { FaThumbsUp } from 'react-icons/fa';

type ThumbsUpVariantProps = SlotRecipeProps<'thumbsUp'> & {
  title?: string;
};

export interface ThumbsUpProps
  extends Alert.RootProps,
    React.PropsWithChildren<ThumbsUpVariantProps> {}

export const ThumbsUp = React.forwardRef<HTMLDivElement, ThumbsUpProps>(
  function ThumbsUp(props, ref) {
    const { title, children, ...restProps } = props;

    const recipe = useSlotRecipe({ key: 'thumbsUp' });
    const styles = recipe(restProps);

    return (
      <Alert.Root status="success" css={styles.root} ref={ref} {...restProps}>
        <Alert.Indicator css={styles.indicator} as={FaThumbsUp} />
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
