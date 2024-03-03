import { Flex, Stack, Text } from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { H4Heading } from '@/components/core';
import { type Project } from '@/data';
import { useHeadingSize } from '@/hooks';

export type ProjectsProps = {
  projects?: Project[];
};

export const Projects: FC<ProjectsProps> = ({ projects }) => {
  const size = useHeadingSize();
  const { t } = useTranslation('resume', {
    keyPrefix: 'experiences.experience',
  });

  if (!projects) {
    return null;
  }

  return (
    <>
      <H4Heading size={size}>
        {t('project', { count: projects.length })}
      </H4Heading>

      <Stack paddingLeft="6" spacing="0">
        {projects.map(({ name, description }) => (
          <Flex
            key={`project-${name}`}
            direction={{ md: 'row', base: 'column' }}
          >
            <Text fontWeight="700" width="120px">
              {name}
            </Text>
            <Text flex="1">{description}</Text>
          </Flex>
        ))}
      </Stack>
    </>
  );
};
