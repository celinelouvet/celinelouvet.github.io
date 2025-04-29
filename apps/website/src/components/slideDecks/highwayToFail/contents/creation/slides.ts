import type { Slide } from '@/components/slide';

import CreationContact from './creationContact';
import CreationFinal from './creationFinal';
import CreationIdea from './creationIdea';
import CreationMarket from './creationMarket';
import CreationMeeting from './creationMeeting';
import CreationSectionTitle from './CreationSectionTitle';
import CreationTimeline from './creationTimeline';

export const slides = [
  CreationSectionTitle,
  ...CreationContact,
  ...CreationMeeting,
  ...CreationIdea,
  ...CreationMarket,
  ...CreationTimeline,
  ...CreationFinal,
] satisfies Slide[];
