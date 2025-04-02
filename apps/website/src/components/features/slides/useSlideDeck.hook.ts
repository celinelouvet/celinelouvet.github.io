import * as React from 'react';

import {
  type SlideDeck,
  type SlideDeckKey,
  slideDecks,
} from '@/components/slideDecks';

export const useSlideDeck = (talkSubjectId?: string, prefix = '') => {
  const [slideDeck, setSlideDeck] = React.useState<SlideDeck | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (talkSubjectId && talkSubjectId in slideDecks) {
      const slideDeck = slideDecks[talkSubjectId as SlideDeckKey];

      setSlideDeck(slideDeck);

      const prefixTitle = prefix !== '' ? `${prefix} - ` : '';

      document.title = `${prefixTitle}${slideDeck.metadata.title}`;
    } else {
      setError('Talk not found');
      setSlideDeck(null);
    }
  }, [talkSubjectId, prefix]);

  return {
    error,
    slideDeck,
  };
};
