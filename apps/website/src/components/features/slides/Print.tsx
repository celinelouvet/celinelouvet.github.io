import * as React from 'react';

import { SlideDeck, ViewTypes } from '@/components/core';

import { useSlideDeck } from './useSlideDeck.hook';

type PrintProps = {
  talkSubjectId?: string;
};

export const Print: React.FC<PrintProps> = ({ talkSubjectId }) => {
  const { error, slideDeck } = useSlideDeck(talkSubjectId);

  if (error || !slideDeck) {
    return <div>Talk not found</div>;
  }

  const slides = slideDeck.slides();
  return <SlideDeck slides={slides} view={ViewTypes.print} />;
};
