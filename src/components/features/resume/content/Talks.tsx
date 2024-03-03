import { Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading, H3Heading } from '@/components/core';
import {
  type ConventionWithDate,
  type Resume,
  type TalkWithConventions,
} from '@/data';
import { useHeadingSize, useTalkSubjects } from '@/hooks';

export type TalksProps = {
  resume: Resume;
};

export const Talks: FC<TalksProps> = ({ resume }) => {
  const size = useHeadingSize();
  const talkSubjects = useTalkSubjects(resume);
  const { t } = useTranslation('resume', { keyPrefix: 'talks' });

  return (
    <Stack>
      <H2Heading size={size}>{t('title')}</H2Heading>

      {talkSubjects.map((talk) => (
        <Box key={talk.subjectId}>
          <TalkContent talk={talk} />
        </Box>
      ))}
    </Stack>
  );
};

const TalkContent: FC<{ talk: TalkWithConventions }> = ({ talk }) => {
  const size = useHeadingSize();

  const { topic, conventions } = talk;
  return (
    <>
      <H3Heading size={size}>{topic}</H3Heading>
      <Text>
        {conventions.map((convention, index) => (
          <TalkConvention
            key={index}
            convention={convention}
            isLast={index === conventions.length - 1}
          />
        ))}
      </Text>
    </>
  );
};

const TalkConvention: FC<{
  convention: ConventionWithDate;
  isLast: boolean;
}> = ({ convention, isLast }) => {
  const color = useColorModeValue('gray.500', 'gray.400');

  const { name, language, when } = convention;

  return (
    <>
      <Text as="span" marginRight="1">
        {name}
      </Text>
      <Text as="span" color={color} fontSize="xs">
        ({language} – {dayjs(when).format('MMM YYYY')})
      </Text>
      {!isLast ? (
        <Text as="span" marginRight="1">
          ,
        </Text>
      ) : null}
    </>
  );
};
