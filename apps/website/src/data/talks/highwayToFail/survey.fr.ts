import { type SurveyPoll, type SurveyPollQuestion } from '@repo/models';

const questions = new Map<string, SurveyPollQuestion>([
  [
    'question1',
    {
      title: 'Avez–vous déjà eu envie de créer une startup ?',
      initialState: true,
      optional: false,
      type: 'choice',
      choices: [
        { text: 'Oui', value: 'yes', next: 'question2' },
        { text: 'Non', value: 'no', next: 'submit' },
      ],
    },
  ],
  [
    'question2',
    {
      title: 'L’avez–vous créée ?',
      initialState: false,
      optional: false,
      type: 'choice',
      choices: [
        { text: 'Oui', value: 'yes', next: 'question3' },
        { text: 'Non', value: 'no', next: 'question5' },
      ],
    },
  ],
  [
    'question3',
    {
      title: 'Considérez–vous que ça a été une réussite ?',
      initialState: false,
      optional: false,
      type: 'choice',
      choices: [
        { text: 'Oui', value: 'yes', next: 'submit' },
        { text: 'Non', value: 'no', next: 'question4' },
      ],
    },
  ],
  [
    'question4',
    {
      title: 'Savez–vous pourquoi ?',
      initialState: false,
      optional: true,
      type: 'text',
      next: 'submit',
    },
  ],
  [
    'question5',
    {
      title: 'Est–ce parce que vous avez peur de l’échec ?',
      initialState: false,
      optional: false,
      type: 'choice',
      choices: [
        { text: 'Oui', value: 'yes', next: 'submit' },
        { text: 'Non', value: 'no', next: 'question6' },
      ],
    },
  ],
  [
    'question6',
    {
      title: 'Quelle en est la raison ?',
      initialState: false,
      optional: true,
      type: 'text',
      next: 'submit',
    },
  ],
  ['submit', { initialState: false, optional: false, type: 'submit' }],
]);

export const survey: SurveyPoll = {
  surveys: [
    {
      name: 'lyoncraft_2024',
      conventionId: 'lyoncraft_2024',
      opensAt: '2024-04-08T08:30:00Z',
      closesAt: '2024-04-08T18:30:00Z',
      show: true,
    },
    {
      name: 'yeeso_2024-04',
      conventionId: 'yeeso_2024-04',
      opensAt: '2024-04-30T08:30:00Z',
      closesAt: '2024-05-01T00:00:00Z',
      show: true,
    },
    {
      name: 'devfest_lille_2024',
      conventionId: 'devfest_lille_2024',
      opensAt: '2024-06-06T08:30:00Z',
      closesAt: '2024-06-07T18:30:00Z',
      show: true,
    },
    {
      name: 'technwine_2024',
      conventionId: 'technwine_2024',
      opensAt: '2024-06-18T08:30:00Z',
      closesAt: '2024-06-18T18:30:00Z',
      show: true,
    },
    {
      name: 'bdxio_2024',
      conventionId: 'bdxio_2024',
      opensAt: '2024-11-08T08:30:00Z',
      closesAt: '2024-11-08T18:30:00Z',
      show: true,
    },
    {
      name: 'mixit_2025',
      conventionId: 'mixit_2025',
      opensAt: '2025-04-29T00:00:00Z',
      closesAt: '2025-05-01T00:00:00Z',
      show: true,
    },
    {
      name: 'voxxedlux_2025',
      conventionId: 'voxxed_days_luxembourg_2025',
      opensAt: '2025-06-18T00:00:00Z',
      closesAt: '2025-06-20T00:00:00Z',
      show: true,
    },
    {
      name: 'test',
      conventionId: 'test',
      opensAt: '2025-01-01T00:00:00Z',
      closesAt: '2026-12-31T23:59:59Z',
      show: false,
    },
  ],
  title: 'Highway to fail',
  questions,
};
