import * as React from 'react';

import { SlideDeck, ViewTypes } from '@/components/core';

import { useSlideDeck } from './useSlideDeck.hook';

type PrintNotesProps = {
  talkSubjectId?: string;
};

export const PrintNotes: React.FC<PrintNotesProps> = ({ talkSubjectId }) => {
  const { error, slideDeck } = useSlideDeck(talkSubjectId, 'Notes');

  if (error || !slideDeck) {
    return <div>Talk not found</div>;
  }

  const slides = slideDeck.slides();
  return <SlideDeck slides={slides} view={ViewTypes.printNotes} />;
};
