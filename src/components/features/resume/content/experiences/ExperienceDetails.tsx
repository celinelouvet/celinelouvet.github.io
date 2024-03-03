import { Stack, type StyleConfig } from '@chakra-ui/react';
import { type FC } from 'react';

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

export const ExperienceDetails: FC<ExperienceDetailsProps> = ({ job }) => {
  const size = useHeadingSize();

  const period = { from: job.from, to: job.to } satisfies Period;

  return (
    <Stack spacing="2">
      <Stack sx={containerCss}>
        <H3Heading size={size}>{job.company}</H3Heading>

        <Stack sx={detailsCss}>
          <Stack sx={timeTextCss}>
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

const containerCss = {
  alignItems: 'baseline',
  flexDirection: { base: 'column', md: 'row' },
  gap: { base: '0', md: '2' },
} satisfies StyleConfig['baseStyle'];

const detailsCss = {
  flexDirection: { base: 'column', md: 'row' },
  alignItems: 'baseline',
} satisfies StyleConfig['baseStyle'];

const timeTextCss = {
  alignItems: 'baseline',
  flexDirection: 'row',
  gap: '2',
} satisfies StyleConfig['baseStyle'];
