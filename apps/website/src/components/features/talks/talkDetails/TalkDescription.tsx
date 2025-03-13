import { Box, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';

import { MoreLessCollapsible } from '@/components/core';

import { type TalkDetailsProps } from './TalkDetails';
import { TalkLinks } from './TalkLinks';

export const TalkDescription: React.FC<TalkDetailsProps> = ({ talk }) => {
  const { topic, conventionId, links, descriptions = [] } = talk;

  if (descriptions.length === 0) {
    return null;
  }

  const [firstLine, ...rest] = descriptions;

  return (
    <>
      <Stack gap="4">
        <Box
          fontSize="sm"
          color={{ base: 'brand.300', _dark: 'brand.700' }}
          flex="1"
        >
          <Text>{firstLine}</Text>

          <MoreLessCollapsible
            logMetadata={{
              target: 'Talk',
              topic: topic,
              conventionId: conventionId,
            }}
          >
            {rest.map((line, index) => (
              <Text key={index}>{line}</Text>
            ))}
          </MoreLessCollapsible>
        </Box>

        <Box minHeight="2em">
          <TalkLinks links={links ?? {}} />
        </Box>
      </Stack>
    </>
  );
};
