import { Text } from '@chakra-ui/react';
import { type FC } from 'react';

type VoteResult = {
  text: string;
  value: number;
  percentage: number;
};

export const SurveyVotes: FC<{ result: VoteResult }> = ({ result }) => {
  const { text, value, percentage } = result;
  return (
    <>
      <Text fontWeight="700" as="span">
        {text}
      </Text>
      <Text as="span">{percentage}%</Text>
      <Text as="span">→</Text>
      <Text as="span">{value}</Text>
    </>
  );
};
