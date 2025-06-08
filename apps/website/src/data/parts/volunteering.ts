import type { Volunteering } from '../models';

const volunteering = {
  'Crafts Records': {
    from: '2024-09-01',
    site: 'https://craftsrecords.org',
    lightLogoId: 'crafts-records.svg',
    darkLogoId: 'crafts-records.svg',
    tasks: [
      { name: 'Snowcamp 2025' },
      { name: 'DevLille 2025' },
      { name: 'Cloud Nord 2025' },
      { name: 'Snowcamp 2026' },
    ],
  },

  Yeeso: {
    from: '2024-09-01',
    site: 'https://yeeso.fr',
    lightLogoId: 'yeeso-light.svg',
    darkLogoId: 'yeeso-dark.svg',
  },
} satisfies Record<
  'Crafts Records' | 'Yeeso',
  Omit<Volunteering, 'name' | 'description' | 'role'>
>;

export const volunteering_fr = [
  {
    ...volunteering['Crafts Records'],
    name: 'Crafts Records',
    role: 'Coach',
    description:
      'Collectif d’orateurs et oratrices expérimentés accompagnant des intervenants débutants pour les aider à se lancer en conférences.',
  },
  {
    ...volunteering.Yeeso,
    name: 'Yeeso',
    role: 'Squad Leader mentorat',
    description:
      'Association visant à accélérer la féminisation des équipes informatiques, via des programmes de sensibilisation, de mentorat et du réseau.',
  },
];

export const volunteering_en = [
  {
    ...volunteering['Crafts Records'],
    name: 'Crafts Records',
    role: 'Coach for first-time speakers',
    description:
      'A collective of experienced speakers coaching first-time speakers to help them get started at conferences.',
  },
  {
    ...volunteering.Yeeso,
    name: 'Yeeso',
    role: 'Mentoring Squad Leader',
    description:
      'Organization aiming to accelerate the feminization of IT teams through awareness programs, mentoring, and networking.',
  },
] satisfies Volunteering[];
