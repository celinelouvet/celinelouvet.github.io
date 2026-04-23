import {
  talkMetadata as choiceMustGoOnMetadata,
  getSlides as choiceMustGoOnSlides,
} from './choiceMustGoOn';
import {
  talkMetadata as highwayToFailMetadata,
  getSlides as highwayToFailSlides,
} from './highwayToFail';
import {
  talkMetadata as permissionsMysteriesMetadata,
  getSlides as permissionsMysteriesSlides,
} from './permissionsMysteries';

export const slideDecks = {
  'highway-to-fail': {
    slides: highwayToFailSlides,
    metadata: highwayToFailMetadata,
  },
  'choice-must-go-on': {
    slides: choiceMustGoOnSlides,
    metadata: choiceMustGoOnMetadata,
  },
  'permissions-mysteries': {
    slides: permissionsMysteriesSlides,
    metadata: permissionsMysteriesMetadata,
  },
};

export type SlideDeckKey = keyof typeof slideDecks;
export type SlideDeck = (typeof slideDecks)[SlideDeckKey];
