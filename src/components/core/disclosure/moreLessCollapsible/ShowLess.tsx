import { Button } from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { BsChevronContract } from 'react-icons/bs';

type ShowLessProps = {
  onClose: () => void;
};

export const ShowLess: FC<ShowLessProps> = ({ onClose }) => {
  const { t } = useTranslation('components', {
    keyPrefix: 'moreLessCollapsible',
  });

  return (
    <Button
      onClick={onClose}
      rightIcon={<BsChevronContract />}
      variant="outline"
      size="sm"
    >
      {t('less')}
    </Button>
  );
};
