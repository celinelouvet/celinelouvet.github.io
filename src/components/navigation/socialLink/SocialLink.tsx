import { Link as ChakraLink, Icon, Text, Tooltip } from '@chakra-ui/react';
import { type FC } from 'react';
import {
  BsBoxArrowUpRight,
  BsLinkedin,
  BsMastodon,
  BsSquareFill,
  BsTwitter,
} from 'react-icons/bs';

import { type Social } from '@/data';

const socialIcon = ({ name }: Social) => {
  switch (name) {
    case 'twitter':
      return BsTwitter;
    case 'linkedin':
      return BsLinkedin;
    case 'mastodon':
      return BsMastodon;
    case 'bluesky':
      return BsSquareFill;
    default:
      return BsBoxArrowUpRight;
  }
};

export type SocialLinkProps = {
  social: Social;
};

export const SocialLink: FC<SocialLinkProps> = ({ social }) => {
  const { handle, link, name } = social;
  return (
    <Tooltip label={name}>
      <ChakraLink href={link} isExternal>
        <Icon as={socialIcon(social)} sx={iconStyle} aria-label={name} />
        <Text as="span">@{handle}</Text>
      </ChakraLink>
    </Tooltip>
  );
};

const iconStyle = {
  marginRight: '0.5rem',
  verticalAlign: 'middle',
};
