import { type Resume, type TalkSubject } from '@/data';

type HookType = Pick<Resume, 'talkSubjects' | 'possibleTalkSubjects'>;
type HookReturnType = { subjectId: string; talkSubject: TalkSubject }[];

export const usePossibleTalkSubjects = ({
  possibleTalkSubjects,
  talkSubjects,
}: HookType): HookReturnType =>
  possibleTalkSubjects
    .filter((subjectId) => talkSubjects.has(subjectId))
    .map((subjectId) => ({
      subjectId,
      talkSubject: talkSubjects.get(subjectId) as TalkSubject,
    }));
