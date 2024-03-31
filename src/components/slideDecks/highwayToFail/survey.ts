import { type SurveyPoll, type SurveyPollQuestion } from '@/models';

const questions = new Map<string, SurveyPollQuestion>([
  [
    'question1',
    {
      title: 'Avez–vous déjà eu envie de créer une startup ?',
      initialState: true,
      optional: false,
      type: 'choice',
      choices: [
        { text: 'Oui', value: 'yes', next: 'question2', color: '#4990bf' },
        { text: 'Non', value: 'no', next: 'submit', color: '#1f435a' },
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
        { text: 'Oui', value: 'yes', next: 'question3', color: '#4990bf' },
        { text: 'Non', value: 'no', next: 'question5', color: '#1f435a' },
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
        { text: 'Oui', value: 'yes', next: 'submit', color: '#4990bf' },
        { text: 'Non', value: 'no', next: 'question4', color: '#1f435a' },
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
        { text: 'Oui', value: 'yes', next: 'submit', color: '#4990bf' },
        { text: 'Non', value: 'no', next: 'question6', color: '#1f435a' },
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
  surveyId: 'test',
  title: 'Highway to fail',
  questions,
};
