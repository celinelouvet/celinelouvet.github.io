import { Box, Card, CardBody, CardHeader, Stack } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';
import { type FC } from 'react';

import { PageContainer } from '@/components/layout';
import { H3Heading } from '@/components/typography';
import { type Experience } from '@/data';

import {
  allProjects,
  allStacks,
  allTasks,
  basicJob,
  descriptions,
  platformStack1,
  platformStacks,
  project1,
  remotes,
  role,
  simpleStack1,
  simpleStacks,
  subjobs,
  to,
} from './fixtures';
import { FullExperience as FullExperienceComponent } from './FullExperience';

const meta = {
  title: 'Resume/Content',
  component: FullExperienceComponent,
  decorators: [
    (Story) => (
      <PageContainer>
        <Box paddingLeft={'120px'}>{Story()}</Box>
      </PageContainer>
    ),
  ],
} satisfies Meta<typeof FullExperienceComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullExperience: Story = {
  render: ({ job }) => {
    const Item: FC<{ title: string; job: Experience }> = ({ title, job }) => (
      <Card variant={'outline'} size={'sm'}>
        <CardHeader>
          <H3Heading>{title}</H3Heading>
        </CardHeader>
        <CardBody>
          <FullExperienceComponent job={job} />
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

        <Item title={'With tasks'} job={{ ...job, tasks: allTasks }} />

        <Item
          title={'With one simple stack'}
          job={{ ...job, stacks: [simpleStack1] }}
        />

        <Item
          title={'With several simple stacks'}
          job={{ ...job, stacks: simpleStacks }}
        />

        <Item
          title={'With one platform stack'}
          job={{ ...job, stacks: [platformStack1] }}
        />

        <Item
          title={'With several platform stacks'}
          job={{ ...job, stacks: platformStacks }}
        />

        <Item title={'With all stacks'} job={{ ...job, stacks: allStacks }} />

        <Item title={'With sub jobs'} job={{ ...job, subjobs }} />

        <Item
          title={'Complete'}
          job={{
            ...job,
            to,
            role,
            remote: 'FULLTIME',
            descriptions,
            projects: allProjects,
            tasks: allTasks,
            stacks: allStacks,
            subjobs,
          }}
        />
      </Stack>
    );
  },
  args: {
    job: basicJob,
  },
};
