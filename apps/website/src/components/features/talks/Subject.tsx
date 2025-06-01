import {
  Box,
  Button,
  Card,
  Flex,
  LinkBox,
  LinkOverlay,
  Spacer,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';

import { H3Heading, Link } from '@/components/core';
import { type TalkSubject } from '@/data';
import { useHeadingSize, useLogger } from '@/hooks';

export type PossibleSubjectProps = {
  subjectId: string;
  subject: TalkSubject;
};

export const Subject: React.FC<PossibleSubjectProps> = ({
  subjectId,
  subject,
}) => {
  const { topic, summary, availableForCfp, descriptions } = subject;
  const { log } = useLogger();
  const { t } = useTranslation('talks', { keyPrefix: 'talk' });
  const size = useHeadingSize();

  const link = `/talks/${subjectId}`;

  return (
    <>
      <LinkBox as="div">
        <Card.Root size="sm" variant="subtle">
          <Card.Header>
            <LinkOverlay asChild>
              <NavLink to={link} onClick={() => log('Talk', { topic })}>
                <Flex width="100%" alignItems="baseline" gap="8">
                  <H3Heading size={size}>{topic}</H3Heading>

                  {availableForCfp ? (
                    <Tag.Root variant="subtle" size="lg">
                      <Tag.Label>{t('availableForCfp')}</Tag.Label>
                    </Tag.Root>
                  ) : null}
                </Flex>
              </NavLink>
            </LinkOverlay>
          </Card.Header>

          <Card.Body>
            <Flex
              direction={{ base: 'column', md: 'row' }}
              gap="2"
              width="100%"
            >
              <Stack>{summary ? <Text>{summary}</Text> : null}</Stack>
              <Spacer />

              {descriptions && descriptions.length > 0 ? (
                <Box>
                  <LinkOverlay asChild>
                    <Button asChild variant="solid-link" size="sm">
                      <Link.Internal
                        to={link}
                        onClick={() => log('Talk', { topic })}
                      >
                        {t('seeAbstract')}
                      </Link.Internal>
                    </Button>
                  </LinkOverlay>
                </Box>
              ) : null}
            </Flex>
          </Card.Body>
        </Card.Root>
      </LinkBox>
    </>
  );
};
