import {
  Button,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { BsChevronDown, BsTranslate } from 'react-icons/bs';

import { AVAILABLE_LANGUAGES, type Languages } from '@/lib/i18n/constants';

const isAvailableLanguage = (value: string): value is Languages => {
  return AVAILABLE_LANGUAGES.some(({ key }) => key === value);
};

export const LanguageMenu: FC = () => {
  const { i18n, t } = useTranslation('header', { keyPrefix: 'languages' });

  const changeLanguage = (value?: string | string[]): void => {
    if (!value) {
      return;
    }
    if (Array.isArray(value)) {
      return changeLanguage(value[0]);
    }
    if (isAvailableLanguage(value)) {
      i18n.changeLanguage(value);
    }
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        leftIcon={<BsTranslate />}
        rightIcon={<BsChevronDown />}
        size="sm"
      >
        {t('title')}
      </MenuButton>
      <MenuList>
        <MenuOptionGroup
          type="radio"
          defaultValue={i18n.language}
          onChange={(value) => changeLanguage(value)}
        >
          {AVAILABLE_LANGUAGES.map(({ key }) => (
            <MenuItemOption key={key} value={key}>
              {t(key)}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};
