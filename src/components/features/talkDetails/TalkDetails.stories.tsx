import { type Meta, type StoryObj } from '@storybook/react';

import { TalkDetails as TalkDetailsComponent } from './TalkDetails';

const meta = {
  title: 'Features/Talks',
  component: TalkDetailsComponent,
  args: {
    talk: {
      subjectId: 'permissions_mysteries',
      conventionId: 'breizhcamp2023',
      topic: 'The authorization mysteries',
      name: 'BreizhCamp 2023',
      descriptions: [
        'At the begin of your project, you simplify handle the user authentication, then little by little, you added some kind of user roles. And then, with time passes, your product manager asks you to refine this management and those user roles won‘t be enough.',
        'Maybe you already had the impression that authorization management is something quite unclear or complex. We know we should do it, but we often don‘t know how to do it, or even why. Sometimes, we even mix it with authentication. But then, what is authorizations and how do we handle it?',
        'To each situation, its solution. We‘ll how to answer to the most common cases, with their pros and cons. Our goal? To handle authorizations for our situation, without adding a lot of complexity to our application.',
      ],
      pictureId: 'breizhcamp2023-Permissions',
      when: '2023-06-30',
      language: 'fr',
      links: {
        program: 'https://www.breizhcamp.org/conference/programme',
      },
    },
  },
} satisfies Meta<typeof TalkDetailsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TalkDetails: Story = {
  render: ({ talk }) => {
    return <TalkDetailsComponent talk={talk} />;
  },
};
