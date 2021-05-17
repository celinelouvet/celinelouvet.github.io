type Certification = {
  topic: string;
  company: string;
  when: string;
};

type Convention = {
  name: string;
  when: string;
};

type Period = {
  from: string;
  to?: string;
};

type Project = {
  name: string;
  description: string;
};

type RemoteType = "FULLTIME" | "2_DAYS" | "NONE";

type Social = {
  name: string;
  handle: string;
  link: string;
};

type Stack = {
  type: string;
  technos: string[];
};

type Talk = {
  topic: string;
  link: string;
  where: Convention[];
};

type Education = Period & {
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

type Experience = Period &
  Role & {
    company?: string;
    remote?: boolean;
    jobs?: Experience[];
    sideRoles?: Experience[];
    projects?: Project[];
    stacks?: Stack[];
  };

type CV = {
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
