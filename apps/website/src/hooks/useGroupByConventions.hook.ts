import { compareDesc, isAfter, isBefore } from 'date-fns';

import {
  type Convention,
  type ConventionWithTalks,
  type Talk,
  type TalkSubject,
} from 'src/data';

type HookType = {
  conventions: Map<string, Convention>;
  talks: Talk[];
  talkSubjects: Map<string, TalkSubject>;
};

export const useGroupByConventions = ({
  conventions,
  talks,
  talkSubjects,
}: HookType) => {
  const today = new Date();
  const enrichedConventions = [...conventions.entries()].map(
    ([conventionId, convention]) => ({
      ...convention,
      talks: talks
        .filter((talk) => talk.conventionId === conventionId)
        .map((talk) => ({ ...talk, ...talkSubjects.get(talk.subjectId) })),
    }),
  );
  const sortedConventions = [...enrichedConventions.values()].sort((a, b) =>
    compareDesc(a.start, b.start),
  ) as ConventionWithTalks[];

  const alreadyDoneConventions = sortedConventions
    .filter(({ start, end = start }) => isBefore(end, today))
    .map((convention) => ({ ...convention, coming: false }));

  const comingConventions = sortedConventions
    .filter(({ start }) => isAfter(start, today))
    .map((convention) => ({ ...convention, coming: true }));

  return { alreadyDoneConventions, comingConventions };
};
