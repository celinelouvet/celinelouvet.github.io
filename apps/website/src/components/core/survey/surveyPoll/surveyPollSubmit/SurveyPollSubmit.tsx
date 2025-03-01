import {
  type BoxProps,
  Button,
  Center,
  type RecipeVariantProps,
  useRecipe,
} from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { BsCheckCircleFill } from 'react-icons/bs';

import { Toaster, useToaster } from '@/components/core';

import { surveyPollSubmitRecipe } from './SurveyPollSubmit.recipe';

type SurveyPollSubmitVariantProps = RecipeVariantProps<
  typeof surveyPollSubmitRecipe
> & {
  onSubmit: () => void;
};

export interface SurveyPollSubmitProps
  extends Omit<BoxProps, 'onSubmit'>,
    React.PropsWithChildren<SurveyPollSubmitVariantProps> {}

export const SurveyPollSubmit = React.forwardRef<
  HTMLDivElement,
  SurveyPollSubmitProps
>(function (props, ref) {
  const { onSubmit, ...restProps } = props;

  const [sent, setSent] = React.useState(false);
  const recipe = useRecipe({ recipe: surveyPollSubmitRecipe });
  const styles = recipe(restProps);

  const toaster = useToaster();
  const { t } = useTranslation('components', { keyPrefix: 'survey' });

  const onClick: React.FormEventHandler = (event) => {
    event.preventDefault();

    setSent(true);
    onSubmit();

    toaster.create({
      title: t('thanks'),
      type: 'success',
      duration: 9000,
    });
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
      <Toaster />
    </Center>
  );
});
