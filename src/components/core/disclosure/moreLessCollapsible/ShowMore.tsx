import { Button } from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { BsChevronExpand } from 'react-icons/bs';

type ShowMoreProps = {
  onOpen: () => void;
};

export const ShowMore: FC<ShowMoreProps> = ({ onOpen }) => {
  const { t } = useTranslation('components', {
    keyPrefix: 'moreLessCollapsible',
  });

  return (
    <Button
      onClick={onOpen}
      rightIcon={<BsChevronExpand />}
      variant="outline"
      size="sm"
    >
      {t('more')}
    </Button>
  );
};
