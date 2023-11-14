export type Certification = {
  topic: string;
  company: string;
  when: string;
};

export type Convention = {
  name: string;
  language: string;
};

export type Links = {
  slides?: string;
  video?: string;
  audio?: string;
  feedbacks?: string;
  program?: string;
};

export type Period = {
  from: string;
  to?: string;
};

export type Platform = {
  type: string;
  technos: string[];
};

export type Project = {
  name: string;
  description: string;
};

export type RemoteType = 'FULLTIME' | 'HYBRID' | 'NONE';
export type Remote = {
  type: RemoteType;
  where: string;
};

export type Social = {
  name: string;
  handle: string;
  link: string;
};

export type Stack = {
  type: string;
  technos: (string | Platform)[];
};

export type TalkSubject = {
  topic: string;
  descriptions?: string[];
};

export type Talk = {
  subjectId: string;
  conventionId: string;
  when: string;
  links?: Links;
  pictureId?: string;
};

export type Training = {
  topic: string;
  company: string;
  when: string;
};

export type Education = Period & {
  school: string;
  fullname?: string;
  diploma?: string;
  speciality?: string;
};

export type Task = {
  name: string;
  subtasks?: Task[];
};

type Role = {
  role?: string;
  descriptions?: string[];
  tasks?: Task[];
};

export type Experience = Period &
  Role & {
    company?: string;
    remote?: RemoteType;
    summarize?: boolean;
    subjobs?: Experience[];
    projects?: Project[];
    stacks?: Stack[];
  };

export type Resume = {
  firstname: string;
  lastname: string;
  birthdate: string;
  firstExperience: string;
  email: string;
  website: string;
  title: string;
  location: string;
  zipCode: string;
  remotes: Remote[];
  hobbies: string;
  biographies: string[];
  descriptions: string[];
  skills: string[];
  socials: Social[];
  experiences: Experience[];
  conventions: Map<string, Convention>;
  talkSubjects: Map<string, TalkSubject>;
  possibleTalkSubjects: string[];
  talks: Talk[];
  educations: Education[];
  trainings: Training[];
  certifications: Certification[];
};

export type ConventionTalk = Convention & TalkSubject & Talk;
export type ConventionWithDate = Convention & { when: string };
export type TalkWithConventions = TalkSubject &
  Talk & { conventions: ConventionWithDate[] };
