import { Text } from '@chakra-ui/react';
import * as React from 'react';

import { H3Heading } from '@/components/core';
import type { TalkWithConventions } from '@/data';
import { useHeadingSize } from '@/hooks';

import { TalkConvention } from './TalkConvention';

export const TalkContent: React.FC<{ talk: TalkWithConventions }> = ({
  talk,
}) => {
  const size = useHeadingSize();

  const { topic, conventions } = talk;
  return (
    <>
      <H3Heading size={size}>{topic}</H3Heading>
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
