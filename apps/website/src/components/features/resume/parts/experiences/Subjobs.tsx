import { Box, Stack, type StackProps, Timeline } from '@chakra-ui/react';
import * as React from 'react';

import { type Experience } from 'src/data';

import { ExperienceDetails } from './ExperienceDetails';

export interface SubjobsProps
  extends
    Omit<StackProps, 'children'>,
    React.PropsWithChildren<{
      job: Experience;
    }> {}

export const Subjobs = React.forwardRef<HTMLDivElement, SubjobsProps>(
  function Subjobs(props, ref) {
    const { job, ...restProps } = props;

    const { subjobs, summarize } = job;

    if (!subjobs || subjobs.length === 0 || summarize) {
      return null;
    }

    return (
      <>
        <Box
          ref={ref}
          {...restProps}
          display={{ base: 'none', _print: 'block' }}
        >
          <Stack gap="6">
            {subjobs.map((subjob) => (
              <Box
                key={`xp-${subjob.company}-${subjob.from}`}
                marginLeft="4"
                paddingX="6"
                paddingY="2"
                borderLeft="5px solid"
                borderColor="brand.600"
                borderRadius="md"
                backgroundColor="brand.900"
                _print={{ breakInside: 'avoid' }}
              >
                <ExperienceDetails job={subjob} level="sub" />
              </Box>
            ))}
          </Stack>
        </Box>

        <Box ref={ref} {...restProps} display={{ _print: 'none' }}>
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
        </Box>
      </>
    );
  },
);
