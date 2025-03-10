import { Box, Card, Stack } from '@chakra-ui/react';
import { type Meta, type StoryObj } from '@storybook/react';
import * as React from 'react';

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
  title: 'Features/Resume/Content',
  component: PodcastDetailsComponent,
} satisfies Meta<typeof PodcastDetailsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllPodcastVersions: Story = {
  args: {
    podcast: basicPodcast,
  },

  decorators: [
    (Story) => (
      <PageContainer>
        <Box paddingLeft="120px">{Story()}</Box>
      </PageContainer>
    ),
  ],

  render: ({ podcast }) => {
    const Item: React.FC<{ title: string; podcast: Podcast }> = ({
      title,
      podcast,
    }) => (
      <Card.Root variant="outline" size="sm">
        <Card.Header>
          <H3Heading>{title}</H3Heading>
        </Card.Header>
        <Card.Body>
          <PodcastDetailsComponent podcast={podcast} />
        </Card.Body>
      </Card.Root>
    );

    return (
      <Stack gap="10">
        <Item title="Simplest version" podcast={podcast} />

        <Item title="With title" podcast={{ ...podcast, title }} />

        <Item title="With author" podcast={{ ...podcast, author }} />

        <Item title="With episode" podcast={{ ...podcast, episode }} />

        <Item title="With description" podcast={{ ...podcast, description }} />

        <Item title="Full version" podcast={fullPodcast} />
      </Stack>
    );
  },
};
