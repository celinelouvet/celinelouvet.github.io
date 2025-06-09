import type { Certification } from '../models';

export const certifications = [
  { topic: 'Polymer 200', company: 'SFEIR', when: '2016-07-01' },
  { topic: 'AngularJs 200', company: 'SFEIR', when: '2016-01-01' },
  {
    topic: 'Google Cloud Platform CP300',
    company: 'Google',
    when: '2013-06-01',
  },
  {
    topic: 'Google Cloud Platform CP200',
    company: 'Google',
    when: '2013-03-01',
  },
] satisfies Certification[];
