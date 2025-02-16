import {
  Alert,
  Box,
  type SlotRecipeProps,
  useSlotRecipe,
} from '@chakra-ui/react';
import * as React from 'react';
import { FaQuoteRight } from 'react-icons/fa';

type QuoteVariantProps = SlotRecipeProps<'quote'> & {
  title?: string;
};

export interface QuoteProps
  extends Alert.RootProps,
    React.PropsWithChildren<QuoteVariantProps> {}

export const Quote = React.forwardRef<HTMLDivElement, QuoteProps>(
  function Quote(props, ref) {
    const { title, children, ...restProps } = props;

    const recipe = useSlotRecipe({ key: 'quote' });
    const styles = recipe(props);

    return (
      <Alert.Root status="info" css={styles.root} ref={ref} {...restProps}>
        <Alert.Indicator css={styles.indicator} as={FaQuoteRight} />
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
