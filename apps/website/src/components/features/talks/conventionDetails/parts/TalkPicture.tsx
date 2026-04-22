import { Center, Image } from '@chakra-ui/react';

import type { TalkWithSubject } from 'src/data';

const height = '120px';
const lgWidth = '200px';

type TalkPictureProps = Pick<TalkWithSubject, 'topic' | 'pictureId'>;

export const TalkPicture: React.FC<TalkPictureProps> = function TalkPicture({
  topic,
  pictureId,
}) {
  if (!pictureId) {
    return null;
  }
  return (
    <Center height={height} width={{ base: '100%', lg: lgWidth }}>
      <Image
        objectFit="cover"
        maxH={height}
        maxW={{ base: '100%', lg: lgWidth }}
        src={`./talks/${pictureId}.jpg`}
        alt={topic}
      />
    </Center>
  );
};
