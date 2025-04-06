'use client';

import type { Slide } from '@/components/slide';

import After from './after';
import AfterEnd from './afterEnd';
import AfterSectionTitle from './AfterSectionTitle';
import BeforeCC from './beforeCC';
import BeforeMe from './beforeMe';
import BeforeSectionTitle from './BeforeSectionTitle';
import CreationContact from './creationContact';
import CreationFinal from './creationFinal';
import CreationIdea from './creationIdea';
import CreationMarket from './creationMarket';
import CreationMeeting from './creationMeeting';
import CreationSectionTitle from './CreationSectionTitle';
import CreationTimeline from './creationTimeline';
import DuringDauphine from './duringDauphine';
import DuringEssec from './duringEssec';
import DuringHaskellChoice from './duringHaskellChoice';
import DuringHaskellConsequences from './duringHaskellConsequences';
import DuringLearnHaskell from './duringLearnHaskell';
import DuringPlatform from './duringPlatform';
import DuringSectionTitle from './DuringSectionTitle';
import DuringSeed from './duringSeed';
import DuringSite from './duringSite';
import DuringSiteMvp from './duringSiteMvp';
import DuringStack from './duringStack';
import DuringWhere from './duringWhere';
import EndTitle from './EndTitle';
import Fairvioo from './fairvioo';
import Introduction from './Introduction';
import MainTitle from './MainTitle';
import Numbers from './numbers';
import Preface from './preface';
import SurveyResult from './SurveyResult';
import Timeline from './Timeline';
import Yeeso from './Yeeso';

export const getSlides = () => {
  return [
    MainTitle,

    ...Fairvioo,

    Introduction,
    Yeeso,

    ...Preface,
    ...Numbers,

    SurveyResult,

    Timeline,

    BeforeSectionTitle,
    ...BeforeMe,
    ...BeforeCC,

    CreationSectionTitle,
    ...CreationContact,
    ...CreationMeeting,
    ...CreationIdea,
    ...CreationMarket,

    ...CreationTimeline,
    ...CreationFinal,

    DuringSectionTitle,
    ...DuringWhere,
    ...DuringEssec,
    ...DuringDauphine,
    ...DuringSite,
    ...DuringSiteMvp,
    ...DuringPlatform,
    ...DuringStack,
    ...DuringHaskellChoice,
    ...DuringLearnHaskell,
    ...DuringHaskellConsequences,
    ...DuringSeed,

    AfterSectionTitle,

    ...AfterEnd,
    ...After,

    EndTitle,
  ] satisfies Slide[];
};
