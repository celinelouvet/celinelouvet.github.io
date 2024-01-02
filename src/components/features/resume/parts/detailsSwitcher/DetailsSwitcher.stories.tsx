import { type Meta, type StoryObj } from '@storybook/react';

import { DetailsSwitcher as DetailsSwitcherComponent } from './DetailsSwitcher';

const meta = {
  title: 'Resume/Content',
  component: DetailsSwitcherComponent,
} satisfies Meta<typeof DetailsSwitcherComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DetailsSwitcher: Story = {
  render: () => {
    const show = (show: boolean) => {
      console.log('showDetails', show);
    };
    return <DetailsSwitcherComponent showDetails={show} />;
  },
};
