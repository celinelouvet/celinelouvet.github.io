import { Stack } from '@chakra-ui/react';

import { SlideContent, SlideContentTypes, SlideNote } from '@/components/slide';

import { ProgressiveList } from '../../components/progressiveList';


const items = [
  { text: 'Langages: Java, etc.' },
  { text: 'Patterns d’architecture: Outbox Pattern, etc.' },
  { text: 'Frameworks: React, etc.' },
  { text: 'Méthodes: Scrum, Basecamp, etc.' },
  { text: 'Infrastructure: GCP Cloud Run, etc.' },
  { text: 'Services tiers: Twilio, etc.' },
];

export const content = (
  <SlideContent
    type={SlideContentTypes.titleWithContent}
    title="Tech radar"
    alignContent="flex-start"
  >
    <Stack width="100%" height="100%" gap="1em">
      <ProgressiveList items={items} />
    </Stack>
  </SlideContent>
);

export const note = <SlideNote></SlideNote>;

const slide = { content, note };
export default slide;
