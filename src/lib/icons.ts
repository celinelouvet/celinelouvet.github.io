import {
  BsBoxArrowUpRight,
  BsLinkedin,
  BsMastodon,
  BsSquareFill,
  BsTwitter,
} from 'react-icons/bs';

export const socialIcon = (name: string) => {
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
