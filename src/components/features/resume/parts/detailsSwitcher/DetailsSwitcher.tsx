import { Flex, Switch, Text } from '@chakra-ui/react';
import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

type DetailsSwitcherProps = {
  showDetails: (show: boolean) => void;
};

export const DetailsSwitcher: FC<DetailsSwitcherProps> = ({ showDetails }) => {
  const { t } = useTranslation('resume', { keyPrefix: 'details' });
  const [detailsShown, setDetailsShown] = useState(false);

  const changeState = (event: React.ChangeEvent<HTMLInputElement>) => {
    const shown = event.target.checked;
    setDetailsShown(shown);
    showDetails(shown);
  };

  return (
    <Flex gap="2" alignItems={'center'}>
      <Switch isChecked={detailsShown} onChange={changeState} />
      <Text as="span">{t('label')}</Text>
    </Flex>
  );
};
