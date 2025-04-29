'use client';

import type { Slide } from '@/components/slide';

import After from './after';
import Before from './before';
import Creation from './creation';
import During from './during';
import EndTitle from './EndTitle';
import Fairvioo from './fairvioo';
import Introduction from './introduction';
import MainTitle from './mainTitle';
import Preface from './preface';
import SurveyResult from './SurveyResult';
import Timeline from './Timeline';

export const getSlides = () => {
  return [
    ...MainTitle,
    ...Fairvioo,
    ...Introduction,
    ...Preface,

    SurveyResult,

    Timeline,

    ...Before,
    ...Creation,
    ...During,
    ...After,

    EndTitle,
  ] satisfies Slide[];
};
