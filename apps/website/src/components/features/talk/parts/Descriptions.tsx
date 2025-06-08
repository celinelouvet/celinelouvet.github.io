import { Stack, Text } from '@chakra-ui/react';
import type * as React from 'react';

import type { TalkSubject } from '@/data';

type DescriptionsProps = {
  descriptions: TalkSubject['descriptions'];
};

export const Descriptions: React.FC<DescriptionsProps> = function Descriptions({
  descriptions = [],
}) {
  if (descriptions.length === 0) {
    return null;
  }

  return (
    <Stack width="100%">
      {descriptions.map((line, index) => (
        <Text key={index}>{line}</Text>
      ))}
    </Stack>
  );
};
