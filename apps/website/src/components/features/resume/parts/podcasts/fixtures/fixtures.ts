import { type Podcast } from '@/data';

export const title = 'Podcast title';
export const author = 'Podcast author';
export const episode = 'S01 E01';
export const description =
  'Technical leader with a mid-management role and a strategic involvement, while being glue for the team, and developing backend features.';
export const links = {
  audio: 'https://example.com/audio.mp3',
  video: 'https://example.com',
};
export const pictureId = 'podcast-picture';

export const basicPodcast = {
  name: 'Podcast name',
  language: 'FR',
  when: '2021-01-01',
} satisfies Podcast;

export const fullPodcast = {
  name: 'Podcast name',
  title,
  author,
  language: 'FR',
  when: '2021-01-01',
  episode,
  description,
  links,
  pictureId,
} satisfies Podcast;
