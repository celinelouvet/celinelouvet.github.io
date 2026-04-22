import { Text } from '@chakra-ui/react';
import * as React from 'react';

import { H3Heading } from 'src/components/core';
import type { TalkWithConventions } from 'src/data';

import { TalkConvention } from './TalkConvention';

export const TalkContent: React.FC<{ talk: TalkWithConventions }> =
  function TalkContent({ talk }) {
    const { topic, conventions } = talk;
    return (
      <>
        <H3Heading>{topic}</H3Heading>
        <Text>
          {conventions.map((convention, index) => (
            <TalkConvention
              key={index}
              convention={convention}
              isLast={index === conventions.length - 1}
            />
          ))}
        </Text>
      </>
    );
  };
