import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Hide,
  Link,
  LinkBox,
  LinkOverlay,
  Spacer,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { DateText, H3Heading } from '@/components/core';
import { type ConventionTalk } from '@/data';
import { useLogger } from '@/hooks';

import { TalkLinks } from './TalkLinks';

export type TalkProps = {
  talk: ConventionTalk;
};

export const Talk: FC<TalkProps> = ({ talk }) => {
  const { t } = useTranslation('home', { keyPrefix: 'talks.talk' });
  const { log } = useLogger();

  const { name, language, topic, subjectId } = talk;
  const link = `/talks/${subjectId}`;

  return (
    <>
      <LinkBox as="div">
        <Card size="sm" variant="filled">
          <CardHeader>
            <LinkOverlay
              as={NextLink}
              href={link}
              onClick={() => log('Talk from home', { topic })}
            >
              <H3Heading>
                <Flex
                  gap="2"
                  alignItems="baseline"
                  direction={{ base: 'column', xl: 'row' }}
                >
                  <Text as="span">{name}</Text>
                  <Hide below="xl">
                    <Text as="span">–</Text>
                  </Hide>
                  <Text as="span">
                    {topic} ({language.toUpperCase()})
                  </Text>
                </Flex>
              </H3Heading>
            </LinkOverlay>
          </CardHeader>

          <CardBody>
            <Flex gap="4" direction={{ base: 'column', lg: 'row' }}>
              <Box>
                <DateText when={talk.when} dateFormat={t('date')} size="lg" />
              </Box>
              <Spacer />
              <Box>
                <TalkLinks links={talk.links ?? {}} />
              </Box>
            </Flex>
          </CardBody>
          <CardFooter textAlign="center">
            <Link as={NextLink} href={link}>
              {t('seeDescription')}
            </Link>
          </CardFooter>
        </Card>
      </LinkBox>
    </>
  );
};
