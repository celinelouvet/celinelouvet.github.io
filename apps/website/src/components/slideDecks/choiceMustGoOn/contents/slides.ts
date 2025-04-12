'use client';

import type { Slide } from '@/components/slide';

import DefineYourObjectives from './defineYourObjectives';
import EndTitle from './endTitle';
import Introduction from './introduction';
import KnowYourExisting from './knowYourExisting';
import KnowYourNeed from './knowYourNeed';
import MainTitle from './mainTitle';
import Preface from './preface';
import ScopeYourNeed from './scopeYourNeed';

export const getSlides = () => {
  return ([] as Slide[]).concat(
    MainTitle,
    Preface,
    KnowYourNeed,
    ScopeYourNeed,
    DefineYourObjectives,
    KnowYourExisting,
    Introduction,
    EndTitle,
  );
};
