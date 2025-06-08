import { type SurveyPollQuestion as SurveyPollQuestionModel } from '@repo/models';
import * as React from 'react';

import {
  SurveyPollChoiceQuestion,
  SurveyPollSubmit,
  SurveyPollTextQuestion,
} from '@/components/core';

type QuestionContentProps = {
  id: string;
  question: SurveyPollQuestionModel;
  onAnswer: (id: string, value: string, next: string, oldNext?: string) => void;
  onSubmit: () => void;
};

export const QuestionContent: React.FC<QuestionContentProps> =
  function QuestionContent({ id, question, onAnswer, onSubmit }) {
    const { type } = question;

    switch (type) {
      case 'choice':
        return (
          <SurveyPollChoiceQuestion
            question={question}
            onAnswer={(value: string, next: string, oldNext?: string) =>
              onAnswer(id, value, next, oldNext)
            }
          />
        );
      case 'text':
        return (
          <SurveyPollTextQuestion
            question={question}
            onAnswer={(value: string, next: string) =>
              onAnswer(id, value, next)
            }
          />
        );
      case 'submit':
        return <SurveyPollSubmit onSubmit={onSubmit} />;
    }
  };
