import { Box, Card, CardBody, CardHeader } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { PageContainer } from '@/components/layout';
import { H3Heading } from '@/components/typography';
import { type Experience } from '@/data';

import { ExperienceDetails as ExperienceDetailsComponent } from './ExperienceDetails';
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
    return (
      <Card variant={'outline'} size={'sm'}>
        <CardHeader>
          <H3Heading>Exemple</H3Heading>
        </CardHeader>
        <CardBody>
          <ExperienceDetailsComponent job={job} />
        </CardBody>
      </Card>
    );
  },
  args: {
    job,
  },
};
