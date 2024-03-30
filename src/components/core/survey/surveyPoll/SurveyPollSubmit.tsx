import {
  Button,
  Center,
  type StyleConfig,
  forwardRef,
  useStyleConfig,
  useToast,
} from '@chakra-ui/react';
import { type FormEventHandler, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsCheckCircleFill } from 'react-icons/bs';

type SurveySubmitProps = {
  onSubmit: () => void;
};

export const SurveyPollSubmit = forwardRef<SurveySubmitProps, 'div'>(
  ({ onSubmit }, ref) => {
    const [sent, setSent] = useState(false);
    const styles = useStyleConfig('SurveySubmit');
    const toast = useToast();
    const { t } = useTranslation('components', { keyPrefix: 'survey' });

    const onClick: FormEventHandler = (event) => {
      event.preventDefault();

      setSent(true);
      onSubmit();

      toast({
        title: t('thanks'),
        status: 'success',
        variant: 'subtle',
        position: 'top-right',
        duration: 9000,
        isClosable: true,
      });
    };

    return (
      <Center ref={ref} sx={styles}>
        {sent ? (
          <Button
            leftIcon={<BsCheckCircleFill />}
            type="submit"
            isDisabled
            width="100%"
          >
            {t('submit')}
          </Button>
        ) : (
          <Button type="submit" onClick={onClick} width="100%">
            {t('submit')}
          </Button>
        )}
      </Center>
    );
  }
);

export const surveyPollSubmitStyles = {
  baseStyle: {},
} satisfies StyleConfig;
