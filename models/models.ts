export type Certification = {
  topic: string;
  company: string;
  when: string;
};

export type Convention = {
  name: string;
  when: string;
};

export type Period = {
  from: string;
  to?: string;
};

export type Project = {
  name: string;
  description: string;
};

export type RemoteType = "FULLTIME" | "HYBRID" | "NONE";
export type Remote = {
  type: RemoteType;
  where: string;
};

export type Social = {
  name: string;
  handle: string;
  link: string;
};

export type Platform = {
  type: string;
  technos: string[];
};

export type Stack = {
  type: string;
  technos: (string | Platform)[];
};

export type Talk = {
  topic: string;
  when?: string;
  description?: string;
  language: string;
  slidesLink?: string;
  videoLink?: string;
  where?: Convention[];
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

type Task = {
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
    jobs?: Experience[];
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
  talks: Talk[];
  educations: Education[];
  trainings: Training[];
  certifications: Certification[];
};
