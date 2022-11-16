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

export type Stack = {
  type: string;
  technos: string[];
};

export type Talk = {
  topic: string;
  link: string;
  where: Convention[];
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
  description?: string;
  tasks?: Task[];
};

export type Experience = Period &
  Role & {
    company?: string;
    remote?: boolean;
    summarize?: boolean;
    jobs?: Experience[];
    sideRoles?: Experience[];
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
  descriptions: string[];
  skills: string[];
  socials: Social[];
  experiences: Experience[];
  talks: Talk[];
  educations: Education[];
  certifications: Certification[];
};
