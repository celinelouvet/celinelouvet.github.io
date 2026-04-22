import { HStack, chakra } from '@chakra-ui/react';
import type * as React from 'react';

import { DateFormatter } from 'src/components/core';
import type { Podcast } from 'src/data';

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
      <DateFormatter type="date" when={when} dateFormat="MMM yyyy" />
      <chakra.span>–</chakra.span>
      <chakra.span>{language.toUpperCase()}</chakra.span>
    </HStack>
  );
};
