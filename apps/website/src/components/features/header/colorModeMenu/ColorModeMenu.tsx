import { Button, Menu } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { BsCheckLg, BsChevronDown } from 'react-icons/bs';

import { ColorModeIcon, useColorMode } from '@/components/ui';
import { useLogger } from '@/hooks';

type ColorMode = 'light' | 'dark' | 'system';
const modes: ColorMode[] = ['light', 'dark', 'system'];

const isColorMode = (value: string): value is ColorMode => {
  return modes.includes(value as ColorMode);
};

export const ColorModeMenu: React.FC = () => {
  const { log } = useLogger();

  return <ColorModeMenuInner log={log} />;
};

type ColorModeMenuInnerProps = {
  log: ReturnType<typeof useLogger>['log'];
};

export const ColorModeMenuInner: React.FC<ColorModeMenuInnerProps> = ({
  log,
}) => {
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
              <Menu.RadioItem
                key={mode}
                value={mode}
                _highlighted={{
                  backgroundColor: { base: 'brand.600', _dark: 'brand.500' },
                  cursor: 'pointer',
                }}
                _checked={{
                  backgroundColor: { base: 'brand.800', _dark: 'brand.300' },
                  cursor: 'default',
                }}
              >
                <Menu.ItemText>{t(mode)}</Menu.ItemText>
                <Menu.ItemIndicator>
                  <BsCheckLg />
                </Menu.ItemIndicator>
              </Menu.RadioItem>
            ))}
          </Menu.RadioItemGroup>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};
