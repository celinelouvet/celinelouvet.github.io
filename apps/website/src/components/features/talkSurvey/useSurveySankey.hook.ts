import { type SurveyPoll, type SurveyPollChoiceQuestion } from '@repo/models';
import * as React from 'react';

import { survey } from '@/data/talks/highwayToFail/survey.fr';
import { useSurveyResults } from '@/hooks';

type QuestionToShow = {
  id: string;
  question: SurveyPollChoiceQuestion;
};

type DataNode = [string, string, number | string];

export function useSurveySankeyData(
  talkSubjectId?: string | string[],
  conventionId?: string | string[],
) {
  const [hasFoundSurvey, setHasFoundSurvey] = React.useState<boolean>(false);
  const [title, setTitle] = React.useState<string>('');
  const [questionsToShow, setQuestionsToShow] = React.useState<
    QuestionToShow[]
  >([]);
  const [data, setData] = React.useState<DataNode[]>([]);

  const { surveyPoll, loading, results, error } = useSurveyResults(
    talkSubjectId,
    conventionId,
  );

  React.useEffect(() => {
    if (surveyPoll) {
      setTitle(survey.title);
      setHasFoundSurvey(true);

      const questions = filterQuestionsToShow(survey.questions);
      setQuestionsToShow(questions);
    }
  }, [surveyPoll]);

  React.useEffect(() => {
    const data: DataNode[] = [];

    questionsToShow.forEach(({ id: sourceId, question }) => {
      const questionResults =
        results[sourceId] ?? ({} as Record<'yes' | 'no', number>);

      question.choices.forEach((choice) => {
        const targetId = choice.next;
        const value = questionResults[choice.value];

        data.push([
          getSankey(sourceId),
          getSankey(targetId),
          value,
        ] satisfies DataNode);
      });
    });
    setData([['From', 'To', 'Weight'], ...data]);
  }, [questionsToShow, results]);

  return {
    hasFoundSurvey,
    title,
    loading,
    error,
    data,
  };
}

function filterQuestionsToShow(
  questions: SurveyPoll['questions'],
): QuestionToShow[] {
  return [...questions.entries()]
    .filter(([, question]) => question.type === 'choice')
    .map(([id, question]) => ({
      id,
      question: question as SurveyPollChoiceQuestion,
    }));
}

function getSankey(id: string): string {
  return survey.questions.get(id)?.sankey ?? id;
}
