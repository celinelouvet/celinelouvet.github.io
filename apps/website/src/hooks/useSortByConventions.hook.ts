import dayjs from 'dayjs';

import {
  type Convention,
  type ConventionTalk,
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

export const useSortByConventions = ({
  conventions,
  talks,
  talkSubjects,
}: HookType) => {
  const allConventionTalks = talks.map((talk) =>
    asConventionTalk({ talk, conventions, talkSubjects }),
  );

  const alreadyDoneTalks = allConventionTalks
    .filter((talk) => isDone(talk))
    .sort(({ when: when1 }, { when: when2 }) => dayjs(when2).diff(when1));
  const comingTalks = allConventionTalks
    .filter((talk) => !isDone(talk))
    .sort(({ when: when1 }, { when: when2 }) => dayjs(when1).diff(when2));

  return { alreadyDoneTalks, comingTalks };
};

type AsConventionTalkType = {
  talk: Talk;
  talkSubjects: Map<string, TalkSubject>;
  conventions: Map<string, Convention>;
};
const asConventionTalk = ({
  talk,
  conventions,
  talkSubjects,
}: AsConventionTalkType): ConventionTalk => {
  const { conventionId, subjectId } = talk;

  const convention = conventions.get(conventionId);
  const subject = talkSubjects.get(subjectId);

  if (!convention || !subject) {
    throw new Error('Convention or subject not found');
  }

  return {
    ...talk,
    ...convention,
    ...subject,
  };
};

const isDone = ({ when }: ConventionTalk): boolean =>
  Boolean(when) && dayjs().isAfter(when, 'date');

const isBefore = (date: string): boolean =>
  dayjs().isBefore(dayjs(date), 'day');

const isAfter = (date: string): boolean => dayjs().isAfter(dayjs(date), 'day');
