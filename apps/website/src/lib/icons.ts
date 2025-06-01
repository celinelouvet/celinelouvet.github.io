import { BsLinkedin, BsMastodon } from 'react-icons/bs';
import { FaBluesky } from 'react-icons/fa6';
import { LuLink } from 'react-icons/lu';

export const socialIcon = (name: string) => {
  switch (name) {
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
