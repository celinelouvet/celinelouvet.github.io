import { Box, type BoxProps } from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

import { ResumePrint } from '@/components/features';
import { useResume } from '@/hooks';

export type ResumePrintPageProps = Omit<BoxProps, 'children'>;

export const ResumePrintPage = React.forwardRef<HTMLDivElement, BoxProps>(
  function ResumePrintPage(props, ref) {
    const { language } = useParams();
    const resume = useResume();
    const { i18n } = useTranslation();

    React.useEffect(() => {
      i18n.changeLanguage(language);
    }, [i18n, language]);

    if (!language) {
      return null;
    }
    if (language !== 'fr' && language !== 'en') {
      return null;
    }

    return (
      <Box ref={ref} {...props}>
        <ResumePrint resume={resume} />
      </Box>
    );
  },
);
