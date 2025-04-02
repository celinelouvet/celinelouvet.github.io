import {
  talkMetadata as highwayToFailMetadata,
  getSlides as highwayToFailSlides,
} from './highwayToFail';

export const slideDecks = {
  'highway-to-fail': {
    slides: highwayToFailSlides,
    metadata: highwayToFailMetadata,
  },
};

export type SlideDeckKey = keyof typeof slideDecks;
export type SlideDeck = (typeof slideDecks)[SlideDeckKey];
