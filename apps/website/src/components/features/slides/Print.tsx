import * as React from 'react';

import { SlideDeck, ViewTypes } from '@/components/core';
import { type SlideDecks, slideDecks } from '@/components/slideDecks';

type PrintProps = {
  talkSubjectId?: string;
};

export const Print: React.FC<PrintProps> = ({ talkSubjectId }) => {
  if (!talkSubjectId || !(talkSubjectId in slideDecks)) {
    return <div>Talk not found</div>;
  }

  const slides = slideDecks[talkSubjectId as SlideDecks]();

  return <SlideDeck slides={slides} view={ViewTypes.print} />;
};
