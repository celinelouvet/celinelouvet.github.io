import { type Resume, type TalkSubject } from '@/data';

type HookType = Pick<Resume, 'talkSubjects' | 'possibleTalkSubjects'>;

export const usePossibleTalkSubjects = ({
  possibleTalkSubjects,
  talkSubjects,
}: HookType): TalkSubject[] =>
  possibleTalkSubjects
    .filter((subjectId) => talkSubjects.has(subjectId))
    .map((subjectId) => talkSubjects.get(subjectId) as TalkSubject);
