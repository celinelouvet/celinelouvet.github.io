import { Card, CardBody, CardHeader, Stack, Text } from '@chakra-ui/react';
import { type FC } from 'react';

import { H3Heading, MoreLessCollapsible } from '@/components/core';
import { type TalkSubject } from '@/data';

export type PossibleSubjectProps = {
  subject: TalkSubject;
};

export const PossibleSubject: FC<PossibleSubjectProps> = ({ subject }) => {
  const { topic, descriptions = [] } = subject;

  return (
    <>
      <Card size="sm" variant="filled">
        <CardHeader>
          <H3Heading>{topic}</H3Heading>
        </CardHeader>

        <CardBody>
          <Descriptions topic={topic} descriptions={descriptions} />
        </CardBody>
      </Card>
    </>
  );
};

const Descriptions: FC<{ topic: string; descriptions: string[] }> = ({
  topic,
  descriptions,
}) => {
  if (descriptions.length === 0) {
    return null;
  }

  const [firstLine, ...rest] = descriptions;

  return (
    <Stack fontSize="sm">
      <Text>{firstLine}</Text>

      <MoreLessCollapsible logMetadata={{ target: 'Subject', topic }}>
        {rest.map((line, index) => (
          <Text key={index}>{line}</Text>
        ))}
      </MoreLessCollapsible>
    </Stack>
  );
};
