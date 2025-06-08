import { HStack, chakra } from '@chakra-ui/react';
import type * as React from 'react';

import { DateText } from '@/components/core';
import type { Podcast } from '@/data';

type DateLanguageProps = Pick<Podcast, 'language' | 'when'>;

export const DateLanguage: React.FC<DateLanguageProps> = function DateLanguage({
  language,
  when,
}) {
  return (
    <HStack
      alignItems="baseline"
      color={{ base: 'brand.300', _dark: 'brand.700' }}
      fontSize="sm"
    >
      <DateText when={when} dateFormat="MMM YYYY" />
      <chakra.span>–</chakra.span>
      <chakra.span>{language.toUpperCase()}</chakra.span>
    </HStack>
  );
};
