import * as React from 'react';

import { SlideDeck, ViewTypes } from '@/components/core';

import { useSlideDeck } from './useSlideDeck.hook';

type ContentProps = {
  talkSubjectId?: string;
};

export const Content: React.FC<ContentProps> = ({ talkSubjectId }) => {
  const { error, slideDeck } = useSlideDeck(talkSubjectId);

  if (error || !slideDeck) {
    return <div>Talk not found</div>;
  }

  const slides = slideDeck.slides();

  return (
    <SlideDeck slides={slides} view={ViewTypes.content} messageRoot="talk" />
  );
};
