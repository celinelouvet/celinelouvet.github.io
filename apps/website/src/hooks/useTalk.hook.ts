import { type Resume, type TalkSubject } from '@/data';

export const useTalk = (resume: Resume, talkSubjectId?: string | string[]) => {
  if (!talkSubjectId) {
    return {
      talkSubject: null,
    };
  }
  if (Array.isArray(talkSubjectId) && talkSubjectId.length === 0) {
    return {
      talkSubject: null,
    };
  }

  const getTalkSubjectId = (talkSubjectId: string | string[]): string => {
    if (Array.isArray(talkSubjectId)) {
      return talkSubjectId[0] ?? '';
    }

    return talkSubjectId;
  };

  const id = getTalkSubjectId(talkSubjectId);

  const talkSubject = resume.talkSubjects.get(id) as TalkSubject;
  const isAvailableForCfp = resume.possibleTalkSubjects.includes(id);

  return {
    talkSubjectId: id,
    talkSubject,
    isAvailableForCfp,
  };
};
