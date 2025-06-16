import { chakra } from '@chakra-ui/react';
import { format } from 'date-fns';
import * as React from 'react';

import type { ConventionWithDate } from '@/data';

type TalkConventionProps = {
  convention: ConventionWithDate;
  isLast: boolean;
};

export const TalkConvention: React.FC<TalkConventionProps> =
  function TalkConvention({ convention, isLast }) {
    const { name, language } = convention;

    const when = format(convention.when, 'MMM yyyy');

    return (
      <>
        <chakra.span marginRight="1">{name}</chakra.span>
        <chakra.span
          color={{ base: 'gray.500', _dark: 'gray.400' }}
          fontSize="xs"
        >
          ({language} – {when})
        </chakra.span>
        {!isLast ? <chakra.span marginRight="1">,</chakra.span> : null}
      </>
    );
  };
