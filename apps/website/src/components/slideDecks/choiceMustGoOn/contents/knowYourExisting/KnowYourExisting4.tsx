import { Stack } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { ProgressiveList } from '../../components/progressiveList';

const items = [
  { text: 'Langages: Java, etc.' },
  { text: 'Patterns d’architecture: Outbox Pattern, etc.', shown: false },
  { text: 'Frameworks: React, etc.', shown: false },
  { text: 'Méthodes: Scrum, Basecamp, etc.', shown: false },
  { text: 'Infrastructure: GCP Cloud Run, etc.', shown: false },
  { text: 'Services tiers: Twilio, etc.', shown: false },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Tech radar"
    alignContent="flex-start"
  >
    <Stack width="100%" height="100%" gap="brand.100">
      <ProgressiveList items={items} />
    </Stack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
