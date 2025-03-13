import { Card, Center, Flex, Image, Spacer } from '@chakra-ui/react';
import * as React from 'react';

import { type ConventionTalk } from '@/data';

import { TalkDescription } from './TalkDescription';
import { TalkHeader } from './TalkHeader';

export type TalkDetailsProps = {
  talk: ConventionTalk;
};

export const TalkDetails: React.FC<TalkDetailsProps> = ({ talk }) => {
  const { pictureId, name, topic } = talk;

  const height = '120px';
  const lgWidth = '200px';

  return (
    <>
      <Card.Root size="sm" variant="subtle">
        <Card.Header>
          <TalkHeader talk={talk} />
        </Card.Header>

        <Card.Body>
          <Flex gap="4" direction={{ base: 'column', lg: 'row' }}>
            <TalkDescription talk={talk} />
            <Spacer />
            <Center height={height} width={{ base: '100%', lg: lgWidth }}>
              <Image
                objectFit="cover"
                maxH={height}
                maxW={{ base: '100%', lg: lgWidth }}
                src={`./talks/${pictureId}.jpg`}
                alt={`${name} - ${topic}`}
              />
            </Center>
          </Flex>
        </Card.Body>
      </Card.Root>
    </>
  );
};
