import { formatDuration, intervalToDuration } from 'date-fns';
import { fr } from 'date-fns/locale';

import { type Resume } from './models';
import {
  certifications,
  conventions,
  educations_fr,
  experiences_fr,
  podcasts_fr,
  remotes,
  socials,
  talkSubjects_fr,
  talks,
  trainings,
  volunteering_fr,
} from './parts';

const firstExperience = '2006-02-01';
const experience = intervalToDuration({
  start: firstExperience,
  end: new Date(),
});
const fromFirstExperience = formatDuration(experience, {
  format: ['years'],
  locale: fr,
});

const resume = {
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
  hobbies: 'Dessins, peinture, modelage, sport',
  biographies: [
    `Développeuse backend et passionnée, depuis ${fromFirstExperience}, aimant la recherche de stabilité et de qualité d’une application.`,
    'Spécialisée sur les architectures cloud, avec une appétence pour les langages fonctionnels.',
    'Intervenante en conférences sur des sujets technologiques, de retour d’expérience et de méthodes.',
    'Bénévole pour des associations dédiées au mentorat, Crafts Records en tant que coach d’intervenantes débutantes et Yeeso en tant que Squad leader Mentorat et intervenante en meetup.',
    'Actuellement lead developer chez Shine.',
  ],
  descriptions: [
    'Développeuse Backend Senior, en Typescript, avec une appétence aux langages fonctionnels.',
    'Plusieurs expériences de lead developer, avec management d’une équipe de développeurs.',
    'Plusieurs expériences de Technical Leader, avec reprise de legacy ou de création en partant de zéro, architecture et de mises en place de méthodes de travail.',
    'Intervenante en conférences sur des sujets technologiques, de retour d’expérience et de méthodes.',
    'Bénévole pour des associations dédiées au mentorat, Crafts Records en tant que coach d’intervenantes débutantes et Yeeso en tant que Squad leader Mentorat et intervenante en meetup.',
  ],
  skills: [
    'Phase de build, avec objectif stabilité & qualité',
    'Accompagnement',
    'Domain Driven Design (DDD)',
    'Architecture cloud (GCP & AWS)',
    'Typescript',
    'NodeJs',
    'Google Cloud Platform (GCP)',
    'Tests & automatisation',
  ],
  socials,
  experiences: experiences_fr,
  talkSubjects: talkSubjects_fr,
  conventions,
  talks,
  podcasts: podcasts_fr,
  educations: educations_fr,
  trainings,
  certifications,
  volunteering: volunteering_fr,
} satisfies Resume;

export default resume;
