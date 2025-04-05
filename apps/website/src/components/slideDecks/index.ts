import {
  talkMetadata as choiceMustGoOnMetadata,
  getSlides as choiceMustGoOnSlides,
} from './choiceMustGoOn';
import {
  talkMetadata as highwayToFailMetadata,
  getSlides as highwayToFailSlides,
} from './highwayToFail';

export const slideDecks = {
  'highway-to-fail': {
    slides: highwayToFailSlides,
    metadata: highwayToFailMetadata,
  },
  'choice-must-go-on': {
    slides: choiceMustGoOnSlides,
    metadata: choiceMustGoOnMetadata,
  },
};

export type SlideDeckKey = keyof typeof slideDecks;
export type SlideDeck = (typeof slideDecks)[SlideDeckKey];
