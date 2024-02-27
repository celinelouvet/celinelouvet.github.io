import { type Meta, type StoryObj } from '@storybook/react';

import { PdfDownloader as PdfDownloaderComponent } from './PdfDownloader';

const meta = {
  title: 'Features/Resume',
  component: PdfDownloaderComponent,
} satisfies Meta<typeof PdfDownloaderComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PdfDownloader: Story = {};
