import { Center, Image } from '@chakra-ui/react';

import { useColorMode } from '@/components/ui';
import type { Volunteering } from '@/data';

const height = '120px';
const lgWidth = '200px';

type OrganizationPictureProps = Pick<
  Volunteering,
  'lightLogoId' | 'darkLogoId' | 'name'
>;

export const OrganizationPicture: React.FC<OrganizationPictureProps> =
  function OrganizationPicture({ lightLogoId, darkLogoId, name }) {
    const { colorMode } = useColorMode();

    if (!lightLogoId || !darkLogoId) {
      return null;
    }
    const logoId = colorMode === 'light' ? darkLogoId : lightLogoId;

    return (
      <Center height={height} width={{ base: '100%', lg: lgWidth }}>
        <Image
          objectFit="cover"
          maxH={height}
          maxW={{ base: '100%', lg: lgWidth }}
          src={`./logos/${logoId}`}
          alt={name}
        />
      </Center>
    );
  };
