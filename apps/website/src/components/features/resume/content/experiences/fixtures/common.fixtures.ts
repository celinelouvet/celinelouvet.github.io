import { type Experience, type RemoteType } from '@/data';

const company = 'Company';
export const from = '2021-01-01';
export const to = '2022-04-25';
export const role = 'Staff engineer';
export const descriptions = [
  'Technical leader with a mid-management role and a strategic involvement, while being glue for the team, and developing backend features.',
  'Mentoring of other managers. Mentoring of a junior developer in career change.',
  'The workload distribution between development and lead/management was 40-60%.',
];
export const remotes = ['FULLTIME', 'HYBRID', 'NONE'] satisfies RemoteType[];

// Full experience
export const basicJob = { company, from } satisfies Experience;
const subjob1 = {
  ...basicJob,
  company: 'Company 1',
} satisfies Experience;
const subjob2 = {
  ...basicJob,
  company: 'Company 2',
} satisfies Experience;
export const subjobs = [subjob1, subjob2] satisfies Experience[];
