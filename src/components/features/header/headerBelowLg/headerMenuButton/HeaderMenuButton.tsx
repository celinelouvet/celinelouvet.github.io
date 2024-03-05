import { Button, DarkMode, Icon } from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { BsList } from 'react-icons/bs';

type HeaderMenuButtonProps = {
  isOpen: boolean;
  onOpen: () => void;
};

export const HeaderMenuButton: FC<HeaderMenuButtonProps> = ({
  isOpen,
  onOpen,
}) => {
  const { t } = useTranslation('header', { keyPrefix: 'nav' });
  const buttonLabel = t(isOpen ? 'open' : 'close');

  return (
    <>
      <DarkMode>
        <Button
          aria-label={buttonLabel}
          onClick={onOpen}
          isActive={isOpen}
          size="2xl"
          variant="ghost"
          _active={{ backgroundColor: 'brand.300' }}
        >
          <Icon as={BsList} />
        </Button>
      </DarkMode>
    </>
  );
};
