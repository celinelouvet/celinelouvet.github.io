import {
  Alert,
  Box,
  type SlotRecipeProps,
  useSlotRecipe,
} from '@chakra-ui/react';
import * as React from 'react';
import { FaBomb } from 'react-icons/fa';

type FailureVariantProps = SlotRecipeProps<'failure'> & {
  title?: string;
};

export interface FailureProps
  extends Alert.RootProps,
    React.PropsWithChildren<FailureVariantProps> {}

export const Failure = React.forwardRef<HTMLDivElement, FailureProps>(
  function Failure(props, ref) {
    const { title, children, ...restProps } = props;

    const recipe = useSlotRecipe({ key: 'failure' });
    const styles = recipe(restProps);

    return (
      <Alert.Root css={styles.root} status="error" ref={ref} {...restProps}>
        <Alert.Indicator as={FaBomb} css={styles.indicator} />
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
