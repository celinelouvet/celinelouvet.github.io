import { Box, Card, CardBody, CardHeader, Stack } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';
import { type FC } from 'react';

import { H3Heading, PageContainer } from '@/components/core';
import { type Experience } from '@/data';

import { ExperienceDetails as ExperienceDetailsComponent } from './ExperienceDetails';
import {
  allProjects,
  basicJob,
  descriptions,
  project1,
  remotes,
  role,
  subjobs,
  to,
} from './fixtures';

const meta = {
  title: 'Resume/Content/ExperienceDetails',
  component: ExperienceDetailsComponent,
  decorators: [
    (Story) => (
      <PageContainer>
        <Box paddingLeft={'120px'}>{Story()}</Box>
      </PageContainer>
    ),
  ],
} satisfies Meta<typeof ExperienceDetailsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExperienceParts: Story = {
  render: ({ job }) => {
    const Item: FC<{ title: string; job: Experience }> = ({ title, job }) => (
      <Card variant={'outline'} size={'sm'}>
        <CardHeader>
          <H3Heading>{title}</H3Heading>
        </CardHeader>
        <CardBody>
          <ExperienceDetailsComponent job={job} />
        </CardBody>
      </Card>
    );

    return (
      <Stack spacing={10}>
        <Item title={'Simplest experience'} job={job} />
        <Item title={'With role'} job={{ ...job, role }} />
        <Item title={'With end date'} job={{ ...job, to }} />

        {remotes.map((remote) => (
          <Item
            key={remote}
            title={`With remote type: ${remote}`}
            job={{ ...job, remote }}
          />
        ))}

        <Item title={'With description'} job={{ ...job, descriptions }} />

        <Item
          title={'With one project'}
          job={{ ...job, projects: [project1] }}
        />

        <Item
          title={'With several projects'}
          job={{ ...job, projects: allProjects }}
        />

        <Item title={'With sub jobs'} job={{ ...job, subjobs }} />
      </Stack>
    );
  },
  args: {
    job: basicJob,
  },
};
