import * as React from 'react';

import { H4Heading } from '@/components/core';
import { useHeadingSize } from '@/hooks';

export type RoleTextProps = {
  role?: string;
};

export const RoleText: React.FC<RoleTextProps> = function RoleText({ role }) {
  const size = useHeadingSize();

  if (!role) {
    return null;
  }

  return (
    <H4Heading size={size} _print={{ breakAfter: 'avoid' }}>
      {role}
    </H4Heading>
  );
};
