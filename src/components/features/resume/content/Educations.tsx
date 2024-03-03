import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { H2Heading, H3Heading, PeriodText } from '@/components/core';
import { type Education } from '@/data';
import { useHeadingSize } from '@/hooks';

export type EducationsProps = {
  educations: Education[];
};

export const Educations: FC<EducationsProps> = ({ educations }) => {
  const size = useHeadingSize();
  const { t } = useTranslation('resume', { keyPrefix: 'educations' });

  return (
    <Stack>
      <H2Heading size={size}>{t('title')}</H2Heading>

      {educations.map((education) => (
        <Box key={education.school}>
          <EducationContent education={education} />
        </Box>
      ))}
    </Stack>
  );
};

const EducationHeader: FC<{ education: Education }> = ({ education }) => {
  const size = useHeadingSize();

  return (
    <Flex alignItems="baseline" gap="2">
      <H3Heading size={size}>{education.school}</H3Heading>
      <PeriodText period={education} />
    </Flex>
  );
};

const EducationFullname: FC<{ education: Education }> = ({ education }) => {
  if (!education.fullname) {
    return null;
  }

  return <Text>{education.fullname}</Text>;
};

const EducationDiploma: FC<{ education: Education }> = ({ education }) => {
  if (!education.diploma || !education.speciality) {
    return null;
  }

  return (
    <Text>
      {education.diploma} — {education.speciality}
    </Text>
  );
};

const EducationContent: FC<{ education: Education }> = ({ education }) => {
  return (
    <Flex direction="column">
      <EducationHeader education={education} />
      <EducationFullname education={education} />
      <EducationDiploma education={education} />
    </Flex>
  );
};
