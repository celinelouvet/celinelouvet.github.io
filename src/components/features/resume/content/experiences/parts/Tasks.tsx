import {
  Grid,
  GridItem,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { H4Heading } from '@/components/core';
import { type Task } from '@/data';
import { useHeadingSize } from '@/hooks';

export type TasksProps = {
  tasks?: Task[];
};

export const Tasks: FC<TasksProps> = ({ tasks }) => {
  const size = useHeadingSize();
  const { t } = useTranslation('resume', {
    keyPrefix: 'experiences.experience',
  });

  if (!tasks || tasks.length === 0) {
    return null;
  }

  return (
    <>
      <H4Heading size={size}>{t('tasks')}</H4Heading>

      <Grid
        gridTemplateColumns={{
          md: `1fr 1fr`,
          base: `100%`,
        }}
        gap="6"
      >
        {tasks.map(({ name, subtasks = [] }) => (
          <GridItem key={`task-${name}`} paddingLeft="6">
            <Text fontWeight="700">{name}</Text>

            <UnorderedList>
              {subtasks.map(({ name }) => (
                <ListItem key={`-subtask-${name}`}>{name}</ListItem>
              ))}
            </UnorderedList>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
