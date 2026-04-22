import {
  Grid,
  GridItem,
  List,
  Stack,
  type StackProps,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { H4Heading } from 'src/components/core';
import { type Experience } from 'src/data';

export interface TasksProps
  extends
    Omit<StackProps, 'children'>,
    React.PropsWithChildren<{
      job: Experience;
    }> {}

export const Tasks = React.forwardRef<HTMLDivElement, TasksProps>(
  function Tasks(props, ref) {
    const { job, ...restProps } = props;

    const { t } = useTranslation('resume', {
      keyPrefix: 'experiences.experience',
    });

    const { tasks, summarize } = job;

    if (!tasks || tasks.length === 0 || summarize) {
      return null;
    }

    const templateColumns =
      tasks.length > 1
        ? {
            md: `1fr 1fr`,
            base: `100%`,
            _print: `1fr 1fr`,
          }
        : `100%`;

    return (
      <Stack gap="2" ref={ref} {...restProps}>
        <H4Heading>{t('tasks')}</H4Heading>

        <Grid gridTemplateColumns={templateColumns} gap="6" columnGap="8">
          {tasks.map(({ name, subtasks = [] }) => (
            <GridItem key={`task-${name}`} paddingLeft="6">
              <Text fontWeight="700">{name}</Text>

              <List.Root>
                {subtasks.map(({ name }) => (
                  <List.Item key={`-subtask-${name}`}>{name}</List.Item>
                ))}
              </List.Root>
            </GridItem>
          ))}
        </Grid>
      </Stack>
    );
  },
);
