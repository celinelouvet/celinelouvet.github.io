import { Card, LinkBox, LinkOverlay, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';
import { NavLink } from 'react-router';

import { H3Heading, MoreLessCollapsible } from '@/components/core';
import { type TalkSubject } from '@/data';
import { useLogger } from '@/hooks';

export type PossibleSubjectProps = {
  subjectId: string;
  subject: TalkSubject;
};

export const PossibleSubject: React.FC<PossibleSubjectProps> = ({
  subjectId,
  subject,
}) => {
  const { topic, descriptions = [] } = subject;
  const { log } = useLogger();

  const link = `/talks/${subjectId}`;

  return (
    <>
      <LinkBox as="div">
        <Card.Root size="sm" variant="subtle">
          <Card.Header>
            <LinkOverlay
              as={NavLink}
              href={link}
              onClick={() => log('Talk', { topic })}
            >
              <H3Heading>{topic}</H3Heading>
            </LinkOverlay>
          </Card.Header>

          <Card.Body>
            <Descriptions topic={topic} descriptions={descriptions} />
          </Card.Body>
        </Card.Root>
      </LinkBox>
    </>
  );
};

const Descriptions: React.FC<{ topic: string; descriptions: string[] }> = ({
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
