import type { Podcast } from '../models';

const podcasts = {
  build_RH: {
    author: 'Shirley Almosni Chiche',
    language: 'FR',
    when: '2023-03-31',
    links: {
      video:
        'https://www.youtube.com/watch?v=FNStkAKsujI&ab_channel=BUILDRH-Face%C3%A0faceavecTataShishi',
    },
    pictureId: 'entretienshirleyalmosnichiche2023',
  },
  k33g_org: {
    author: 'Philippe Charrière',
    language: 'FR',
    when: '2023-04-06',
    links: {
      video:
        'https://www.youtube.com/watch?v=psQV7zB59hQ&ab_channel=PhilippeCharri%C3%A8re',
    },
    pictureId: 'livephilippecharriere2023',
  },
  punkin_dev: {
    author: 'Sylvain Coudert',
    episode: 'S03 E12',
    language: 'FR',
    when: '2023-06-20',
    links: {
      audio:
        'https://podcast.ausha.co/punkindev/s03e12-dev-lead-architecte-non-archidev-avec-celine-louvet',
    },
    pictureId: 'podcast_punkindev2023',
  },
  dev_exp: {
    author: 'Donatien Léon',
    language: 'FR',
    when: '2023-12-29',
    links: {
      audio: 'https://podcast.ausha.co/developer-experience/celine-louvet',
    },
    pictureId: 'podcast_devxp2023',
  },
  avocado_growth: {
    author: 'Mansour Mahamat‑salle',
    episode: 'Episode 18',
    language: 'FR',
    when: '2024-01-22',
    links: {
      audio:
        'https://podcast.ausha.co/avocado-growth-portrait-tech/18-parcours-tech-celine',
    },
    pictureId: 'podcast_avocadogrowth2024',
  },
} satisfies Record<string, Omit<Podcast, 'name' | 'title' | 'description'>>;

export const podcasts_fr = [
  {
    ...podcasts.build_RH,
    name: 'Build RH: Entretien',
    description:
      'Sur mon expérience professionnelle, en tant que femme dans le monde du développement et sur ma conception du mentorat.',
  },
  {
    ...podcasts.k33g_org,
    name: 'Live Twitch sur k33g_org',
    description:
      'Sur la gestion des permissions en système distribué, notamment dans le milieu bancaire.',
  },
  {
    ...podcasts.punkin_dev,
    name: 'Punkin Dev',
    title: 'Dev? Lead? Architecte? Non! ARCHIDEV',
    description:
      'Sur mon expérience professionnelle, l’architecture et le mentorat.',
  },
  {
    ...podcasts.dev_exp,
    name: 'Developer Experience',
    title: '18 ans d’exploration technique et humaine dans l’informatique',
    description:
      'Sur ma recherche de l’expérience parfaite pour moi, mon expérience, l’architecture et le mentorat.',
  },
  {
    ...podcasts.avocado_growth,
    name: 'Avocado Growth : Portrait Tech',
    description:
      'Sur mon parcours dans la tech, notamment comment je suis arrivée où je suis aujourd’hui.',
  },
] satisfies Podcast[];

export const podcasts_en = [
  {
    ...podcasts.build_RH,
    name: 'Build RH: Interview',
    description:
      'About my professional experience, as a woman in tech, and about my view of mentorship.',
  },
  {
    ...podcasts.k33g_org,
    name: 'Live Twitch on k33g_org',
    description:
      'About authorizations management in a microservices architecture, with banking examples.',
  },
  {
    ...podcasts.punkin_dev,
    name: 'Punkin Dev',
    title: 'Dev? Lead? Architect? No! ARCHIDEV',
    description:
      'About my professional experience, architecture and mentoring.',
  },
  {
    ...podcasts.dev_exp,
    name: 'Developer Experience',
    title: '18 years of technical and human exploration in IT',
    description:
      'About my search for the perfect experience for me, my experience, architecture and mentoring.',
  },
  {
    ...podcasts.avocado_growth,
    name: 'Avocado Growth : Tech Profile',
    description:
      'About my journey in tech, including how I got to where I am today.',
  },
] satisfies Podcast[];
