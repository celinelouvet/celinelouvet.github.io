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

export type RemoteType = "FULLTIME" | "2_DAYS" | "NONE";

type Social = {
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
    jobs?: Experience[];
    sideRoles?: Experience[];
    projects?: Project[];
    stacks?: Stack[];
  };

export type CV = {
  firstname: string;
  lastname: string;
  birthdate: string;
  email: string;
  title: string;
  location: string;
  remote: RemoteType;
  description: string;
  skills: string[];
  socials: Social[];
  experiences: Experience[];
  talks: Talk[];
  educations: Education[];
  certifications: Certification[];
};
