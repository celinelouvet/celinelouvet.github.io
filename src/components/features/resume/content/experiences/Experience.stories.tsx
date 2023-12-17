import { Box, Card, CardBody, CardHeader, Stack } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';
import { type FC } from 'react';

import { PageContainer } from '@/components/layout';
import { H3Heading } from '@/components/typography';
import { type Experience } from '@/data';

import { ExperienceComponent } from './Experience';
import {
  allProjects,
  allStacks,
  allTasks,
  basicJob,
  descriptions,
  role,
  subjobs,
  to,
} from './fixtures';

const meta = {
  title: 'Resume/Content/Experience',
  component: ExperienceComponent,
  decorators: [
    (Story) => (
      <PageContainer>
        <Box paddingLeft={'120px'}>{Story()}</Box>
      </PageContainer>
    ),
  ],
} satisfies Meta<typeof ExperienceComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const job = {
  ...basicJob,
  to,
  role,
  remote: 'FULLTIME',
  descriptions,
  projects: allProjects,
  subjobs,
  tasks: allTasks,
  stacks: allStacks,
} satisfies Experience;

export const AllVersions: Story = {
  render: ({ job }) => {
    const Item: FC<{ title: string; job: Experience; full?: boolean }> = ({
      title,
      job,
      full,
    }) => (
      <Card variant={'outline'} size={'sm'}>
        <CardHeader>
          <H3Heading>{title}</H3Heading>
        </CardHeader>
        <CardBody>
          <ExperienceComponent job={job} full={full} />
        </CardBody>
      </Card>
    );

    return (
      <Stack spacing={10}>
        <Item title={'Simple version'} job={job} full={false} />
        <Item title={'Full version'} job={job} full={true} />
      </Stack>
    );
  },
  args: {
    job,
    full: false,
  },
};
