import {
  type BoxProps,
  Button,
  Center,
  Dialog,
  type RecipeVariantProps,
  Text,
  useRecipe,
} from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { BsCheckCircleFill } from 'react-icons/bs';

import { CloseButton } from 'src/components/core';

import { surveyPollSubmitRecipe } from './SurveyPollSubmit.recipe';

type SurveyPollSubmitVariantProps = RecipeVariantProps<
  typeof surveyPollSubmitRecipe
> & {
  onSubmit: () => void;
};

export interface SurveyPollSubmitProps
  extends
    Omit<BoxProps, 'onSubmit'>,
    React.PropsWithChildren<SurveyPollSubmitVariantProps> {}

export const SurveyPollSubmit = React.forwardRef<
  HTMLDivElement,
  SurveyPollSubmitProps
>(function SurveyPollSubmit(props, ref) {
  const { onSubmit, ...restProps } = props;

  const [sent, setSent] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation('components', { keyPrefix: 'survey' });

  const recipe = useRecipe({ recipe: surveyPollSubmitRecipe });
  const styles = recipe(restProps);

  const onClick: React.FormEventHandler = (event) => {
    event.preventDefault();

    setSent(true);

    setTimeout(() => {
      setOpen(true);
    }, 500);
    onSubmit();
  };

  return (
    <Center ref={ref} css={styles} {...restProps}>
      {sent ? (
        <>
          <Button type="submit" disabled width="100%">
            <BsCheckCircleFill />
            {t('submit')}
          </Button>
        </>
      ) : (
        <Button type="submit" onClick={onClick} width="100%">
          {t('submit')}
        </Button>
      )}

      <Dialog.Root
        placement="center"
        motionPreset="slide-in-bottom"
        open={open}
        lazyMount
        onOpenChange={(event) => {
          setOpen(event.open);
        }}
      >
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.CloseTrigger asChild>
              <CloseButton />
            </Dialog.CloseTrigger>
            <Dialog.Title> </Dialog.Title>
            <Dialog.Body>
              <Center width="100%" height="100%">
                <Text>{t('thanks')}</Text>
              </Center>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </Center>
  );
});
