import {
  Alert,
  type SlotRecipeProps,
  Stack,
  useSlotRecipe,
} from '@chakra-ui/react';
import * as React from 'react';
import { FaQuestion } from 'react-icons/fa';

type QuestionVariantProps = SlotRecipeProps<'question'> & {
  title?: string;
};

export interface QuestionProps
  extends Alert.RootProps,
    React.PropsWithChildren<QuestionVariantProps> {}

export const Question = React.forwardRef<HTMLDivElement, QuestionProps>(
  function Question(props, ref) {
    const { title, children, ...restProps } = props;

    const recipe = useSlotRecipe({ key: 'question' });
    const styles = recipe(restProps);

    return (
      <Alert.Root status="warning" css={styles.root} ref={ref} {...restProps}>
        <Alert.Indicator as={FaQuestion} css={styles.indicator} />
        <Stack width="100%" height="100%">
          {title ? <Alert.Title css={styles.title}>{title}</Alert.Title> : null}
          <Alert.Description css={styles.description}>
            {children}
          </Alert.Description>
        </Stack>
      </Alert.Root>
    );
  },
);
