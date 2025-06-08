import type { Education } from '../models';

const educations = {
  epsi: {
    from: '2002',
    to: '2005',
    school: 'EPSI Paris',
  },
  ensea: {
    from: '2000',
    to: '2002',
    school: 'ENSEA',
    fullname:
      'Ecole Nationale Supérieure de l’Electronique et de ses Applications',
  },
} satisfies Record<string, Omit<Education, 'diploma' | 'speciality'>>;

export const educations_fr = [
  {
    ...educations.epsi,
    diploma: 'Diplôme d’ingénieur en informatique',
    speciality: 'Génie logiciel',
  },
  educations.ensea,
] satisfies Education[];

export const educations_en = [
  {
    ...educations.epsi,
    diploma: 'Diploma in computer engineering',
    speciality: 'Génie logiciel',
  },
  educations.ensea,
];
