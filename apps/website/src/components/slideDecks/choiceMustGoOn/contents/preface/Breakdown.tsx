import { chakra } from '@chakra-ui/react';

type DataResult = {
  title: string;
  value: number;
};

export const Breakdown: React.FC<{ result: DataResult }> = ({ result }) => {
  const { title, value } = result;
  return (
    <>
      <chakra.span fontWeight="700">{title}</chakra.span>
      <chakra.span>{value}%</chakra.span>
    </>
  );
};
