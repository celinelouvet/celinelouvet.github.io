import { Box, Stack } from '@chakra-ui/react';
import * as React from 'react';

import {
  DurationText,
  H3Heading,
  MoreLessCollapsible,
  PeriodText,
} from '@/components/core';
import { type Experience, type Period } from '@/data';
import { useHeadingSize, useIsPrint } from '@/hooks';

import {
  Descriptions,
  Projects,
  RemoteText,
  RoleText,
  Stacks,
  Tasks,
} from './parts';
import { Subjobs } from './Subjobs';

export type ExperienceDetailsProps = {
  job: Experience;
  level: 'main' | 'sub';
};

export const ExperienceDetails: React.FC<ExperienceDetailsProps> =
  function ExperienceDetails({ job, level }) {
    const size = useHeadingSize();
    const isPrint = useIsPrint();

    const period = { from: job.from, to: job.to } satisfies Period;

    const isMainWithoutSubjobs = level === 'main' && !job.subjobs?.length;

    return (
      <Stack
        gap="2"
        _print={
          isMainWithoutSubjobs || level === 'sub'
            ? { pageBreakInside: 'avoid' }
            : {}
        }
      >
        <Stack
          alignItems="baseline"
          flexDirection={{ base: 'column', md: 'row' }}
          gap={{ base: '0', md: '2' }}
          _print={{ breakAfter: 'avoid', breakInside: 'avoid' }}
        >
          <H3Heading size={size} _print={{ breakAfter: 'avoid' }}>
            {job.company}
          </H3Heading>

          <Stack
            alignItems="baseline"
            flexDirection={{ base: 'column', md: 'row' }}
          >
            <Stack alignItems="baseline" flexDirection="row" gap="2">
              <PeriodText period={period} />
              <DurationText period={period} />
            </Stack>
            <RemoteText remote={job.remote} />
          </Stack>
        </Stack>
        <RoleText role={job.role} />
        <Descriptions descriptions={job.descriptions} />
        <Projects projects={job.projects} summarize={job.summarize} />

        {!job.summarize && !isPrint ? (
          <MoreLessCollapsible
            shown={Boolean(job.tasks) || Boolean(job.stacks)}
            logMetadata={{
              target: 'Experience',
              company: job.company,
              from: job.from,
              to: job.to,
            }}
            marginTop="-2"
            paddingTop="2"
          >
            <Box marginBottom="2">
              <Tasks tasks={job.tasks} />
            </Box>
            <Stacks stacks={job.stacks} />
          </MoreLessCollapsible>
        ) : null}

        {isPrint && !job.summarize ? <Tasks tasks={job.tasks} /> : null}
        {isPrint && !job.summarize ? <Stacks stacks={job.stacks} /> : null}

        {!job.summarize ? <Subjobs subjobs={job.subjobs} /> : null}
      </Stack>
    );
  };
