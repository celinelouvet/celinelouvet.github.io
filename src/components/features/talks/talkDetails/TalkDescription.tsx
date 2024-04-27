import { Stack, StackItem, Text, useColorModeValue } from '@chakra-ui/react';
import { type FC } from 'react';

import { MoreLessCollapsible } from '@/components/core';

import { type TalkDetailsProps } from './TalkDetails';
import { TalkLinks } from './TalkLinks';

export const TalkDescription: FC<TalkDetailsProps> = ({ talk }) => {
  const { topic, conventionId, links, descriptions = [] } = talk;

  const color = useColorModeValue('gray.600', 'blanc');

  if (descriptions.length === 0) {
    return null;
  }

  const [firstLine, ...rest] = descriptions;

  return (
    <>
      <Stack spacing="4">
        <StackItem fontSize="sm" color={color} flex="1">
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
        </StackItem>

        <StackItem minHeight="2em">
          <TalkLinks links={links ?? {}} />
        </StackItem>
      </Stack>
    </>
  );
};
