import { type FC } from 'react';

import { H4Heading } from '@/components/typography';
import { useHeadingSize } from '@/hooks';

export type RoleTextProps = {
  role?: string;
};

export const RoleText: FC<RoleTextProps> = ({ role }) => {
  const size = useHeadingSize();

  if (!role) {
    return null;
  }

  return <H4Heading size={size}>{role}</H4Heading>;
};
