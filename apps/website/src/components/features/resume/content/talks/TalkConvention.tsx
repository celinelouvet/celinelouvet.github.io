import { Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import * as React from 'react';

import type { ConventionWithDate } from '@/data';

export const TalkConvention: React.FC<{
  convention: ConventionWithDate;
  isLast: boolean;
}> = ({ convention, isLast }) => {
  const { name, language, when } = convention;

  return (
    <>
      <Text as="span" marginRight="1">
        {name}
      </Text>
      <Text
        as="span"
        color={{ base: 'gray.500', _dark: 'gray.400' }}
        fontSize="xs"
      >
        ({language} – {dayjs(when).format('MMM YYYY')})
      </Text>
      {!isLast ? (
        <Text as="span" marginRight="1">
          ,
        </Text>
      ) : null}
    </>
  );
};
