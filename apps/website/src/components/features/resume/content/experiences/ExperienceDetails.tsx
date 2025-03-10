import { Stack } from '@chakra-ui/react';
import * as React from 'react';

import {
  DurationText,
  H3Heading,
  MoreLessCollapsible,
  PeriodText,
} from '@/components/core';
import { type Experience, type Period } from '@/data';
import { useHeadingSize } from '@/hooks';

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
};

export const ExperienceDetails: React.FC<ExperienceDetailsProps> = ({
  job,
}) => {
  const size = useHeadingSize();

  const period = { from: job.from, to: job.to } satisfies Period;

  return (
    <Stack gap="2">
      <Stack
        alignItems="baseline"
        flexDirection={{ base: 'column', md: 'row' }}
        gap={{ base: '0', md: '2' }}
      >
        <H3Heading size={size}>{job.company}</H3Heading>

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
      <Projects projects={job.projects} />

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
        <Tasks tasks={job.tasks} />
        <Stacks stacks={job.stacks} />
      </MoreLessCollapsible>

      <Subjobs subjobs={job.subjobs} />
    </Stack>
  );
};
