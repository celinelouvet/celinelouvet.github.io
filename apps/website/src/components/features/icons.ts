import { BsLinkedin, BsMastodon, BsTwitterX } from 'react-icons/bs';
import { FaBluesky } from 'react-icons/fa6';
import { LuLink } from 'react-icons/lu';

export const socialIcon = (name: string) => {
  switch (name) {
    case 'twitter':
      return BsTwitterX;
    case 'linkedin':
      return BsLinkedin;
    case 'mastodon':
      return BsMastodon;
    case 'bluesky':
      return FaBluesky;
    default:
      return LuLink;
  }
};
