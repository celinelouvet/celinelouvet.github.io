import dayjs from 'dayjs';

import {
  type Convention,
  type ConventionWithDate,
  type Talk,
  type TalkSubject,
  type TalkWithConventions,
} from '@/data';

type FullTalk = TalkSubject & Talk & { convention: ConventionWithDate };

type HookType = {
  conventions: Map<string, Convention>;
  talks: Talk[];
  talkSubjects: Map<string, TalkSubject>;
};

export const useTalkSubjects = ({
  conventions,
  talks,
  talkSubjects,
}: HookType): TalkWithConventions[] => {
  const allConventionTalks = talks
    .map((talk) => asConventionTalk({ talk, conventions, talkSubjects }))
    .sort(({ when: when1 }, { when: when2 }) => dayjs(when2).diff(when1));

  return allConventionTalks.reduce(groupBySubjectId, []);
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
}: AsConventionTalkType): FullTalk => {
  const { conventionId, subjectId } = talk;

  const convention = conventions.get(conventionId);
  const subject = talkSubjects.get(subjectId);

  if (!convention || !subject) {
    throw new Error('Convention or subject not found');
  }

  return {
    ...talk,
    ...subject,
    convention: { ...convention, when: talk.when },
  };
};

const groupBySubjectId = (
  acc: TalkWithConventions[],
  { convention, ...currentTalk }: FullTalk
) => {
  const index = acc.findIndex(
    ({ subjectId }) => subjectId === currentTalk.subjectId
  );

  if (index === -1) {
    acc.push({ ...currentTalk, conventions: [convention] });
  } else {
    acc[index]?.conventions.push(convention);
  }

  return acc satisfies TalkWithConventions[];
};
