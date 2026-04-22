import { Stack } from '@chakra-ui/react';
import * as React from 'react';

import { H3Heading, MoreLessCollapsible } from 'src/components/core';
import { type Experience } from 'src/data';

import {
  Descriptions,
  Infos,
  Projects,
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
    const isMainWithoutSubjobs = level === 'main' && !job.subjobs?.length;

    return (
      <Stack
        gap="3"
        _print={
          isMainWithoutSubjobs || level === 'sub'
            ? { pageBreakInside: 'avoid' }
            : {}
        }
      >
        <Stack gap="1">
          <Stack
            alignItems="baseline"
            flexDirection={{ base: 'column', md: 'row', _print: 'row' }}
            gap={{ base: '0', md: '2', _print: '2' }}
            _print={{ breakAfter: 'avoid', breakInside: 'avoid' }}
          >
            <H3Heading _print={{ breakAfter: 'avoid' }}>
              {job.company}
            </H3Heading>

            <Infos job={job} />
          </Stack>

          <RoleText role={job.role} />
        </Stack>
        <Descriptions descriptions={job.descriptions} />
        <Projects projects={job.projects} summarize={job.summarize} />

        <MoreLessCollapsible
          shown={(Boolean(job.tasks) || Boolean(job.stacks)) && !job.summarize}
          logMetadata={{
            target: 'Experience',
            company: job.company,
            from: job.from,
            to: job.to,
          }}
          marginTop="-2"
          paddingTop="2"
          _print={{ display: 'none' }}
        >
          <Stack gap="4">
            <Tasks job={job} />
            <Stacks job={job} />
          </Stack>
        </MoreLessCollapsible>

        <Tasks job={job} display={{ base: 'none', _print: 'block' }} />
        <Stacks job={job} display={{ base: 'none', _print: 'block' }} />
        <Subjobs job={job} />
      </Stack>
    );
  };
