import {
  Box,
  Card,
  Flex,
  LinkBox,
  LinkOverlay,
  Spacer,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';

import { DateText, H3Heading, Link } from '@/components/core';
import { type ConventionTalk } from '@/data';
import { useLogger } from '@/hooks';

import { AllLinks } from '../allLinks';

export type TalkProps = {
  talk: ConventionTalk;
};

export const Talk: React.FC<TalkProps> = ({ talk }) => {
  const { t } = useTranslation('home', { keyPrefix: 'talks.talk' });
  const { log } = useLogger();

  const { name, language, topic, subjectId } = talk;
  const link = `/talks/${subjectId}`;

  return (
    <>
      <LinkBox as="div">
        <Card.Root size="sm" variant="subtle">
          <Card.Header>
            <LinkOverlay asChild>
              <NavLink
                to={link}
                onClick={() => log('Talk from home', { topic })}
              >
                <H3Heading>
                  <Flex
                    gap="2"
                    alignItems="baseline"
                    direction={{ base: 'column', xl: 'row' }}
                  >
                    <Text as="span">{name}</Text>
                    <Text as="span" display={{ base: 'none', xl: 'inline' }}>
                      –
                    </Text>
                    <Text as="span">
                      {topic} ({language.toUpperCase()})
                    </Text>
                  </Flex>
                </H3Heading>
              </NavLink>
            </LinkOverlay>
          </Card.Header>

          <Card.Body paddingY="0">
            <Flex gap="4" direction={{ base: 'column', lg: 'row' }}>
              <Box>
                <DateText when={talk.when} dateFormat={t('date')} size="lg" />
              </Box>
              <Spacer />
              <Box>
                <AllLinks links={talk.links} />
              </Box>
            </Flex>
          </Card.Body>

          <Card.Footer textAlign="center" padding="4">
            <Link.Internal to={link}>{t('seeDescription')}</Link.Internal>
          </Card.Footer>
        </Card.Root>
      </LinkBox>
    </>
  );
};
