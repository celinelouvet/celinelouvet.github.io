import { Center, Image } from '@chakra-ui/react';

import type { Podcast } from '@/data';

const height = '120px';
const lgWidth = '200px';

type PodcastPictureProps = {
  podcast: Pick<Podcast, 'name' | 'title' | 'pictureId'>;
};

export const PodcastPicture: React.FC<PodcastPictureProps> =
  function PodcastPicture(props) {
    const { name, title, pictureId } = props.podcast;

    return (
      <Center height={height} width={{ base: '100%', lg: lgWidth }}>
        <Image
          objectFit="cover"
          maxH={height}
          maxW={{ base: '100%', lg: lgWidth }}
          src={`./talks/${pictureId}.jpg`}
          alt={`${name} - ${title}`}
        />
      </Center>
    );
  };
