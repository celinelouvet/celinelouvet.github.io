import { type Project } from '@/data';

// Projects
export const project1 = {
  name: 'Project 1',
  description: 'Description 1',
} satisfies Project;

const project2 = {
  name: 'Project 2',
  description: 'Description 2',
} satisfies Project;

const project3 = {
  name: 'Project 3',
  description: 'Description 3',
} satisfies Project;

export const allProjects = [project1, project2, project3] satisfies Project[];
