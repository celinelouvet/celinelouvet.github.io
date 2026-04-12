import { formatDuration, intervalToDuration } from 'date-fns';
import { enUS } from 'date-fns/locale';

import type { Resume } from './models';
import {
  certifications,
  conventions,
  educations_en,
  experiences_en,
  podcasts_en,
  remotes,
  socials,
  talkSubjects_en,
  talks,
  trainings,
  volunteering_en,
} from './parts';

export const firstExperience = '2006-02-01';

const experience = intervalToDuration({
  start: firstExperience,
  end: new Date(),
});
const fromFirstExperience = formatDuration(experience, {
  format: ['years'],
  locale: enUS,
});

export const resume = {
  firstname: 'Céline',
  lastname: 'Louvet',
  birthdate: '1980-12-02',
  firstExperience,
  email: 'celine@louvet.me',
  website: 'https://celine.louvet.me',
  title: 'Staff engineer / Senior lead developer',
  location: 'Lyon',
  zipCode: '69006',
  remotes,
  hobbies: 'Drawing, painting, clay modeling, sports',
  biographies: [
    `Backend developer and passionate, for ${fromFirstExperience}, loves reaching stability and quality for production applications.`,
    'Specializing into cloud architectures, with a liking for functional languages.',
    'Speaker at conferences on technology topics, experience sharing, and methodologies.',
    'Volunteer for NGOs dedicated to mentoring, Crafts Records as first-time speakers coach and Yeeso as Mentoring Squad Leader and meetup speaker.',
    'Currently lead developer at Shine.',
  ],
  descriptions: [
    'Backend Senior Developer, in Typescript, with a liking for functional languages.',
    'Several experiences as lead developer or staff engineer, with developers teams management.',
    'Several experiences as Technical Leader, with legacy rework or from scratch creation, architecture and methodology practices set up.',
    'Speaker at conferences on technology topics, experience sharing, and methodologies.',
    'Volunteer for NGOs dedicated to mentoring, Crafts Records as first-time speakers coach and Yeeso as Mentoring Squad Leader and meetup speaker.',
  ],
  skills: [
    'Build phase, wih stability and quality as a goal',
    'Mentoring',
    'Domain Driven Design (DDD)',
    'Cloud architecture (GCP & AWS)',
    'Typescript',
    'NodeJs',
    'Google Cloud Platform (GCP)',
    'Tests & automation',
  ],
  socials,
  experiences: experiences_en,
  talkSubjects: talkSubjects_en,
  conventions,
  talks,
  podcasts: podcasts_en,
  educations: educations_en,
  trainings,
  certifications,
  volunteering: volunteering_en,
} satisfies Resume;

export default resume;
