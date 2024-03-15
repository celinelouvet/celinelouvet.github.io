import {
  BsLink45Deg,
  BsLinkedin,
  BsMastodon,
  BsTwitterX,
} from 'react-icons/bs';
import { PiButterflyFill } from 'react-icons/pi';

export const socialIcon = (name: string) => {
  switch (name) {
    case 'twitter':
      return BsTwitterX;
    case 'linkedin':
      return BsLinkedin;
    case 'mastodon':
      return BsMastodon;
    case 'bluesky':
      return PiButterflyFill;
    default:
      return BsLink45Deg;
  }
};
