import * as React from 'react';

import { SlideDeck, ViewTypes } from '@/components/slide';

import { useSlideDeck } from './useSlideDeck.hook';

type NotesProps = {
  talkSubjectId?: string;
};

export const Notes: React.FC<NotesProps> = ({ talkSubjectId }) => {
  const { error, slideDeck } = useSlideDeck(talkSubjectId, 'Notes');

  if (error || !slideDeck) {
    return <div>Talk not found</div>;
  }

  const slides = slideDeck.slides();

  return (
    <SlideDeck slides={slides} view={ViewTypes.notes} messageRoot="talk" />
  );
};
