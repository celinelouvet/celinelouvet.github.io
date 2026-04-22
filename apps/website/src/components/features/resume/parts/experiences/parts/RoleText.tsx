import * as React from 'react';

import { H4Heading } from 'src/components/core';

export type RoleTextProps = {
  role?: string;
};

export const RoleText: React.FC<RoleTextProps> = function RoleText({ role }) {
  if (!role) {
    return null;
  }

  return <H4Heading _print={{ breakAfter: 'avoid' }}>{role}</H4Heading>;
};
