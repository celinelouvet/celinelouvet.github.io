import { Button, Menu } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { BsChevronDown } from 'react-icons/bs';

import { ColorModeIcon, useColorMode } from 'src/components/ui';
import type { useLogger } from 'src/hooks';

import { ColorModeItem } from './ColorModeItem';
import { isColorMode, modes } from './colorModes';

type ColorModeMenuInnerProps = {
  log: ReturnType<typeof useLogger>['log'];
};

export const ColorModeMenuInner: React.FC<ColorModeMenuInnerProps> =
  function ColorModeMenuInner({ log }) {
    const { t } = useTranslation('header', { keyPrefix: 'colorModes' });
    const { colorMode, setColorMode } = useColorMode();

    const changeColorMode = React.useCallback(
      (value?: string | string[]): void => {
        if (!value) {
          return;
        }
        if (Array.isArray(value)) {
          return changeColorMode(value[0]);
        }
        if (isColorMode(value)) {
          setColorMode(value);
          log(`Color mode change`, { from: colorMode, to: value });
        }
      },
      [colorMode, log, setColorMode],
    );

    return (
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button as={Button} size="sm" justifyContent="space-between">
            <ColorModeIcon />
            {t('title')}

            <Menu.Indicator>
              <BsChevronDown />
            </Menu.Indicator>
          </Button>
        </Menu.Trigger>

        <Menu.Positioner width="var(--reference-width)">
          <Menu.Content
            backgroundColor={{ base: 'brand.900', _dark: 'brand.200' }}
          >
            <Menu.RadioItemGroup
              value={colorMode}
              onValueChange={(event) => changeColorMode(event.value)}
            >
              {modes.map((mode) => (
                <ColorModeItem key={mode} mode={mode} />
              ))}
            </Menu.RadioItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    );
  };
