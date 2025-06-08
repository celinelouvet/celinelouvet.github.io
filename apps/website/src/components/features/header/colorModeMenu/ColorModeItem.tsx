import { Menu } from '@chakra-ui/react';
import type * as React from 'react';
import { useTranslation } from 'react-i18next';
import { BsCheckLg } from 'react-icons/bs';

import type { ColorMode } from './colorModes';

type ColorModeItemProps = {
  mode: ColorMode;
};

export const ColorModeItem: React.FC<ColorModeItemProps> =
  function ColorModeItem({ mode }) {
    const { t } = useTranslation('header', { keyPrefix: 'colorModes' });

    return (
      <Menu.RadioItem
        key={mode}
        value={mode}
        _highlighted={{
          backgroundColor: {
            base: 'brand.600',
            _dark: 'brand.500',
          },
          cursor: 'pointer',
        }}
        _checked={{
          backgroundColor: {
            base: 'brand.800',
            _dark: 'brand.300',
          },
          cursor: 'default',
        }}
      >
        <Menu.ItemText>{t(mode)}</Menu.ItemText>
        <Menu.ItemIndicator>
          <BsCheckLg />
        </Menu.ItemIndicator>
      </Menu.RadioItem>
    );
  };
