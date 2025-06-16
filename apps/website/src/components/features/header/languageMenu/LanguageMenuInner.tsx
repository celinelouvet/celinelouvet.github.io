import { Button, Menu } from '@chakra-ui/react';
import type * as React from 'react';
import { useTranslation } from 'react-i18next';
import { BsCheckLg, BsChevronDown, BsTranslate } from 'react-icons/bs';

import type { useLogger } from '@/hooks';
import { AVAILABLE_LANGUAGES } from '@/lib/i18n';

import { useLanguage } from './useLanguage.hook';

type LanguageMenuInnerProps = {
  log: ReturnType<typeof useLogger>['log'];
};

export const LanguageMenuInner: React.FC<LanguageMenuInnerProps> =
  function LanguageMenuInner({ log }) {
    const { t } = useTranslation('header', { keyPrefix: 'languages' });
    const { language, changeLanguage } = useLanguage({
      onChange: (newValue: string, oldValue: string) => {
        log(`Language change`, { from: oldValue, to: newValue });
      },
    });

    return (
      <Menu.Root
        id="language-menu"
        ids={{
          trigger: 'language-menu-button',
          content: 'language-menu-content',
        }}
      >
        <Menu.Trigger asChild>
          <Button as={Button} size="sm" justifyContent="space-between">
            <BsTranslate />
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
              value={language}
              onValueChange={(event) => changeLanguage(event.value)}
            >
              {AVAILABLE_LANGUAGES.map(({ key }) => (
                <Menu.RadioItem
                  key={key}
                  value={key}
                  _highlighted={{
                    backgroundColor: { base: 'brand.600', _dark: 'brand.500' },
                    cursor: 'pointer',
                  }}
                  _checked={{
                    backgroundColor: { base: 'brand.800', _dark: 'brand.300' },
                    cursor: 'default',
                  }}
                >
                  <Menu.ItemText>{t(key)}</Menu.ItemText>
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
