import { Box, Card, CardBody, CardHeader, Stack } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';
import { type FC } from 'react';

import { H3Heading, PageContainer } from '@/components/core';
import { type Podcast } from '@/data';

import {
  author,
  basicPodcast,
  description,
  episode,
  fullPodcast,
  title,
} from './fixtures';
import { PodcastDetails as PodcastDetailsComponent } from './PodcastDetails';

const meta = {
  title: 'Features/Resume',
  component: PodcastDetailsComponent,
  decorators: [
    (Story) => (
      <PageContainer>
        <Box paddingLeft="120px">{Story()}</Box>
      </PageContainer>
    ),
  ],
} satisfies Meta<typeof PodcastDetailsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllPodcastVersions: Story = {
  render: ({ podcast }) => {
    const Item: FC<{ title: string; podcast: Podcast }> = ({
      title,
      podcast,
    }) => (
      <Card variant="outline" size="sm">
        <CardHeader>
          <H3Heading>{title}</H3Heading>
        </CardHeader>
        <CardBody>
          <PodcastDetailsComponent podcast={podcast} />
        </CardBody>
      </Card>
    );

    return (
      <Stack spacing="10">
        <Item title="Simplest version" podcast={podcast} />

        <Item title="With title" podcast={{ ...podcast, title }} />

        <Item title="With author" podcast={{ ...podcast, author }} />

        <Item title="With episode" podcast={{ ...podcast, episode }} />

        <Item title="With description" podcast={{ ...podcast, description }} />

        <Item title="Full version" podcast={fullPodcast} />
      </Stack>
    );
  },
  args: {
    podcast: basicPodcast,
  },
};
