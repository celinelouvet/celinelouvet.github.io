import { chakra, useToken } from '@chakra-ui/react';
import * as React from 'react';

export const Brace: React.FC = () => {
  const [brand_400] = useToken('colors', 'brand.400');
  return (
    <chakra.svg
      width="100%"
      height="100%"
      viewBox="0 0 34 254"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2C5.97826 2 9.79356 4.1468 12.6066 7.96812C15.4197 11.7894 17 16.9723 17 22.3765V106.624C17 117.877 23.7157 127 32 127C23.7157 127 17 136.123 17 147.376V231.624C17 242.877 10.2843 252 2 252"
        stroke={brand_400}
        strokeWidth="4"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </chakra.svg>
  );
};
