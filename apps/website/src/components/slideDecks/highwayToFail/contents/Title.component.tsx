import * as React from 'react';

import { H1Heading } from '@/components/core';

export const Title: React.FC<{ title: string }> = function Title({ title }) {
  return title.split('\n').map((line, i) => (
    <H1Heading
      key={i}
      variant="slide"
      size="lg"
      textAlign="center"
      lineHeight="1.5"
    >
      {line}
    </H1Heading>
  ));
};

// const Title: React.FC<{ title: string }> = ({ title }) =>
//   title.split('\n').map((line, i) => (
//     <H1Heading key={i} variant="slide" size="sm" textAlign="center">
//       {line}
//     </H1Heading>
//   ));
