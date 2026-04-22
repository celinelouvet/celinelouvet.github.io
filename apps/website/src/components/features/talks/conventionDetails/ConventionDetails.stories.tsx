import { type Meta, type StoryObj } from '@storybook/react';

import { PageContainer } from 'src/components/core';

import { ConventionDetails as ConventionDetailsComponent } from './ConventionDetails';

const meta = {
  title: 'Features/Talks',
  component: ConventionDetailsComponent,
} satisfies Meta<typeof ConventionDetailsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ConventionDetails: Story = {
  args: {
    convention: {
      name: 'BreizhCamp 2023',
      start: '2023-06-29',
      end: '2023-06-30',
      coming: true,
      language: 'fr',
      program: 'https://www.breizhcamp.org/conference/programme',

      talks: [
        {
          availableForCfp: true,
          subjectId: 'permissions_mysteries',
          conventionId: 'breizhcamp2023',
          topic: 'The authorization mysteries',
          summary: 'How to handle authorizations in your application?',
          descriptions: [
            'In this talk, we will explore the different ways to handle authorizations in your application. We will cover the basics of permissions, roles, and how to implement them effectively.',
          ],
          when: '2023-06-30T10:00:00+02:00',
          links: {
            video: 'https://www.youtube.com/watch?v=example',
            audio: 'https://www.example.com/audio',
            slides: 'https://www.example.com/slides',
          },
        },
      ],
    },
  },

  decorators: [
    (Story) => (
      <PageContainer>
        <Story />
      </PageContainer>
    ),
  ],
};
