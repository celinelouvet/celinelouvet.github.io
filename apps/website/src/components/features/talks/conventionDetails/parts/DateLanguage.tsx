import { HStack, chakra } from '@chakra-ui/react';
import type * as React from 'react';
import { useTranslation } from 'react-i18next';

import { DateFormatter } from 'src/components/core';
import type { ConventionWithTalks } from 'src/data';

export type DateLanguageProps = Pick<
  ConventionWithTalks,
  'language' | 'start' | 'end'
>;

export const DateLanguage: React.FC<DateLanguageProps> = function DateLanguage({
  language,
  start,
  end,
}) {
  const { t } = useTranslation('talks', { keyPrefix: 'talk' });

  if (!end) {
    return (
      <HStack
        alignItems="baseline"
        color={{ base: 'brand.300', _dark: 'brand.700' }}
        fontSize="sm"
      >
        <DateFormatter type="date" when={start} dateFormat={t('date')} />
        <chakra.span>–</chakra.span>
        <chakra.span>{language.toUpperCase()}</chakra.span>
      </HStack>
    );
  }

  return (
    <>
      <HStack
        alignItems="baseline"
        color={{ base: 'brand.300', _dark: 'brand.700' }}
        fontSize="sm"
      >
        <HStack gap="0">
          <DateFormatter type="date" when={start} dateFormat="dd" />
          <chakra.span>-</chakra.span>
          <DateFormatter type="date" when={end} dateFormat={t('date')} />
        </HStack>
        <chakra.span>–</chakra.span>
        <chakra.span>{language.toUpperCase()}</chakra.span>
      </HStack>
    </>
  );
};
