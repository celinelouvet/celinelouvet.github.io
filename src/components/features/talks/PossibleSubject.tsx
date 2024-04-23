import {
  Card,
  CardBody,
  CardHeader,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { type FC } from 'react';

import { H3Heading, MoreLessCollapsible } from '@/components/core';
import { type TalkSubject } from '@/data';
import { useLogger } from '@/hooks';

export type PossibleSubjectProps = {
  subjectId: string;
  subject: TalkSubject;
};

export const PossibleSubject: FC<PossibleSubjectProps> = ({
  subjectId,
  subject,
}) => {
  const { topic, descriptions = [] } = subject;
  const { log } = useLogger();

  const link = `/talks/${subjectId}`;

  return (
    <>
      <LinkBox as="div">
        <Card size="sm" variant="filled">
          <CardHeader>
            <LinkOverlay
              as={NextLink}
              href={link}
              onClick={() => log('Talk', { topic })}
            >
              <H3Heading>{topic}</H3Heading>
            </LinkOverlay>
          </CardHeader>

          <CardBody>
            <Descriptions topic={topic} descriptions={descriptions} />
          </CardBody>
        </Card>
      </LinkBox>
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
