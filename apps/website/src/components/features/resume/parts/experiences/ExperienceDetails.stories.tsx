import { Card, Stack } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';
import * as React from 'react';

import { H3Heading, PageContainer } from '@/components/core';
import { type Experience } from '@/data';

import { ExperienceDetails as ExperienceDetailsComponent } from './ExperienceDetails';
import {
  allProjects,
  basicJob,
  descriptions,
  fullJob,
  project1,
  remotes,
  role,
  subjobs,
  to,
} from './fixtures';

const meta = {
  title: 'Features/Resume/Parts',
  component: ExperienceDetailsComponent,
} satisfies Meta<typeof ExperienceDetailsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllExperienceVersions: Story = {
  args: {
    job: basicJob,
    level: 'main',
  },
  render: ({ job, level }) => {
    const Item: React.FC<{ title: string; job: Experience }> = ({
      title,
      job,
    }) => (
      <Card.Root variant="outline" size="sm">
        <Card.Header>
          <H3Heading>{title}</H3Heading>
        </Card.Header>
        <Card.Body>
          <ExperienceDetailsComponent job={job} level={level} />
        </Card.Body>
      </Card.Root>
    );

    return (
      <PageContainer>
        <Stack gap="10" paddingLeft="120px">
          <Item title="Simplest experience" job={job} />
          <Item title="With role" job={{ ...job, role }} />
          <Item title="With end date" job={{ ...job, to }} />

          {remotes.map((remote) => (
            <Item
              key={remote}
              title={`With remote type: ${remote}`}
              job={{ ...job, remote }}
            />
          ))}

          <Item title="With description" job={{ ...job, descriptions }} />

          <Item
            title="With one project"
            job={{ ...job, projects: [project1] }}
          />

          <Item
            title="With several projects"
            job={{ ...job, projects: allProjects }}
          />

          <Item title="With sub jobs" job={{ ...job, subjobs }} />

          <Item title="Full version" job={fullJob} />
        </Stack>
      </PageContainer>
    );
  },
};
