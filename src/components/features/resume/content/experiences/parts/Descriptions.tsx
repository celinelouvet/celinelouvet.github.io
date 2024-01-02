import { Stack, Text } from '@chakra-ui/react';
import { type FC } from 'react';

export type DescriptionsProps = {
  descriptions?: string[];
};

export const Descriptions: FC<DescriptionsProps> = ({ descriptions }) => {
  if (!descriptions) {
    return null;
  }

  return (
    <Stack spacing={0}>
      {descriptions.map((description, index) => (
        <Text key={index} marginBottom={0}>
          {description}
        </Text>
      ))}
    </Stack>
  );
};
