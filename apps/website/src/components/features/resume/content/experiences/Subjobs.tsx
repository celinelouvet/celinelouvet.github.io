import { Box, Stack, Timeline } from '@chakra-ui/react';
import * as React from 'react';

import { type Experience } from '@/data';
import { useIsPrint } from '@/hooks';

import { ExperienceDetails } from './ExperienceDetails';

export type SubjobsProps = {
  subjobs?: Experience[];
};

export const Subjobs: React.FC<SubjobsProps> = ({ subjobs }) => {
  const isPrint = useIsPrint();

  if (!subjobs || subjobs.length === 0) return null;

  if (isPrint) {
    return (
      <Stack gap="4">
        {subjobs.map((subjob) => (
          <Box
            key={`xp-${subjob.company}-${subjob.from}`}
            marginLeft="8"
            paddingX="8"
            paddingY="2"
            borderLeft="3px solid"
            borderColor="brand.700"
            borderLeftRadius="md"
          >
            <ExperienceDetails job={subjob} level="sub" />
          </Box>
        ))}
      </Stack>
    );
  }

  return (
    <Timeline.Root variant="subtle">
      {subjobs.map((subjob) => (
        <Timeline.Item key={`xp-${subjob.company}-${subjob.from}`}>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator />
          </Timeline.Connector>

          <Timeline.Content>
            <Timeline.Title>
              <ExperienceDetails job={subjob} level="sub" />
            </Timeline.Title>
          </Timeline.Content>
        </Timeline.Item>
      ))}
      <Timeline.Item />
    </Timeline.Root>
  );
};
