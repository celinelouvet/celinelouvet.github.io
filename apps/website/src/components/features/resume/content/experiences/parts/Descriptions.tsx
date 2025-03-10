import { Stack, Text } from '@chakra-ui/react';
import * as React from 'react';

export type DescriptionsProps = {
  descriptions?: string[];
};

export const Descriptions: React.FC<DescriptionsProps> = ({ descriptions }) => {
  if (!descriptions) {
    return null;
  }

  return (
    <Stack gap="0">
      {descriptions.map((description, index) => (
        <Text key={index} marginBottom="0">
          {description}
        </Text>
      ))}
    </Stack>
  );
};
