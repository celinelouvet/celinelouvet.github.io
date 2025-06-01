import dayjs from 'dayjs';

import {
  type Convention,
  type ConventionWithTalks,
  type Talk,
  type TalkSubject,
} from '@/data';

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
  const enrichedConventions = [...conventions.entries()].map(
    ([conventionId, convention]) => ({
      ...convention,
      talks: talks
        .filter((talk) => talk.conventionId === conventionId)
        .map((talk) => ({ ...talk, ...talkSubjects.get(talk.subjectId) })),
    }),
  );
  const sortedConventions = [...enrichedConventions.values()].sort((a, b) =>
    dayjs(b.start).diff(dayjs(a.start)),
  ) as ConventionWithTalks[];

  const alreadyDoneConventions = sortedConventions
    .filter(({ start, end = start }) => isAfter(end))
    .map((convention) => ({ ...convention, coming: false }));

  const comingConventions = sortedConventions
    .filter(({ start }) => isBefore(start))
    .map((convention) => ({ ...convention, coming: true }));

  return { alreadyDoneConventions, comingConventions };
};

const isBefore = (date: string): boolean =>
  dayjs().isBefore(dayjs(date), 'day');

const isAfter = (date: string): boolean => dayjs().isAfter(dayjs(date), 'day');
