import {
  Button,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  useColorMode,
} from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { BsChevronDown, BsMoonStarsFill, BsSunFill } from 'react-icons/bs';

type ColorMode = 'light' | 'dark' | 'system';
const modes: ColorMode[] = ['light', 'dark', 'system'];

const isColorMode = (value: string): value is ColorMode => {
  return modes.includes(value as ColorMode);
};

export const ColorModeMenu: FC = () => {
  const { t } = useTranslation('header', { keyPrefix: 'colorModes' });
  const { colorMode, setColorMode } = useColorMode();

  const leftIcon = colorMode === 'dark' ? <BsMoonStarsFill /> : <BsSunFill />;

  const changeColorMode = (value?: string | string[]): void => {
    if (!value) {
      return;
    }
    if (Array.isArray(value)) {
      return changeColorMode(value[0]);
    }
    if (isColorMode(value)) {
      console.log('value', value);
      setColorMode(value);
    }
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        leftIcon={leftIcon}
        rightIcon={<BsChevronDown />}
        size="sm"
      >
        {t('title')}
      </MenuButton>

      <MenuList>
        <MenuOptionGroup
          type="radio"
          value={colorMode}
          onChange={(value) => changeColorMode(value)}
        >
          {modes.map((mode) => (
            <MenuItemOption key={mode} value={mode}>
              {t(mode)}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};
