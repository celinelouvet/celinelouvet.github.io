import { getSlides as highwayToFailSlides } from './highwayToFail';

export const slideDecks = {
  'highway-to-fail': highwayToFailSlides,
};

export type SlideDecks = keyof typeof slideDecks;
