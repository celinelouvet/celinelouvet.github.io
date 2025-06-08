import { Button, Card, Center, Flex, Spacer, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Link } from '@/components/core';
import { type ConventionWithTalks } from '@/data';

import { Header } from './Header';
import { TalkDetails } from './TalkDetails';

export type ConventionDetailsProps = {
  convention: ConventionWithTalks;
};

export const ConventionDetails: React.FC<ConventionDetailsProps> =
  function ConventionDetails({ convention }) {
    const { t } = useTranslation('home', { keyPrefix: 'talks.talk' });

    return (
      <>
        <Card.Root size="sm" variant="subtle">
          <Card.Header>
            <Header convention={convention} />
          </Card.Header>

          <Card.Body>
            <Flex gap="4" direction={{ base: 'column', lg: 'row' }}>
              <Stack gap="6" width="100%">
                {convention.talks.map((talk) => (
                  <TalkDetails key={talk.subjectId} talk={talk} />
                ))}
              </Stack>
              <Spacer />
              {convention.coming && convention.program ? (
                <Center>
                  <Button asChild variant="solid-link">
                    <Link.External href={convention.program}>
                      {t('program')}
                    </Link.External>
                  </Button>
                </Center>
              ) : null}
            </Flex>
          </Card.Body>
        </Card.Root>
      </>
    );
  };
