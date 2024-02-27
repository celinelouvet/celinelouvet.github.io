import { type Experience } from '@/data';

import { basicJob, descriptions, role, subjobs, to } from './common.fixtures';
import { allProjects } from './projects.fixtures';
import { allStacks } from './stacks.fixtures';
import { allTasks } from './tasks.fixtures';

export const fullJob = {
  ...basicJob,
  to,
  role,
  remote: 'FULLTIME',
  descriptions,
  projects: allProjects,
  subjobs,
  tasks: allTasks,
  stacks: allStacks,
} satisfies Experience;

export * from './common.fixtures';
export * from './projects.fixtures';
export * from './stacks.fixtures';
export * from './tasks.fixtures';
