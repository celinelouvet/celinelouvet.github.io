import dayjs from 'dayjs';

import {
  type Convention,
  type ConventionTalk,
  type Talk,
  type TalkSubject,
} from '@/data';

type HookType = {
  conventions: Map<string, Convention>;
  talks: Talk[];
  talkSubjects: Map<string, TalkSubject>;
};

export const useSortByConventions = ({
  conventions,
  talks,
  talkSubjects,
}: HookType) => {
  const allConventionTalks = talks
    .map((talk) => asConventionTalk({ talk, conventions, talkSubjects }))
    .sort(({ when: when1 }, { when: when2 }) => dayjs(when2).diff(when1));

  const alreadyDoneTalks = allConventionTalks.filter((talk) => isDone(talk));
  const comingTalks = allConventionTalks.filter((talk) => !isDone(talk));

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
