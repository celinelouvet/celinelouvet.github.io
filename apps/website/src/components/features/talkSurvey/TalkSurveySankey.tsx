import {
  Box,
  Skeleton,
  Stack,
  type StackProps,
  useToken,
} from '@chakra-ui/react';
import * as React from 'react';
import { Chart, type ReactGoogleChartProps } from 'react-google-charts';
import { useTranslation } from 'react-i18next';

import { H2Heading } from 'src/components/core';

import { useSurveySankeyData } from './useSurveySankey.hook';

export interface TalkSurveySankeyProps
  extends
    StackProps,
    React.PropsWithChildren<{
      talkSubjectId?: string | string[];
      conventionId?: string | string[];
    }> {}

export const TalkSurveySankey = React.forwardRef<
  HTMLDivElement,
  TalkSurveySankeyProps
>(function TalkSurveySankey({ talkSubjectId, conventionId }, ref) {
  const { t } = useTranslation('components', { keyPrefix: 'survey' });

  const { hasFoundSurvey, title, loading, error, data } = useSurveySankeyData(
    talkSubjectId,
    conventionId,
  );
  const [brand_200, brand_500, brand_600] = useToken('colors', [
    'brand.200',
    'brand.500',
    'brand.600',
  ]);

  if (loading) return <Box>{t('loading')}</Box>;
  if (!hasFoundSurvey) return <Box>{t('noSurvey')}</Box>;
  if (error) return <Box>{t('error')}</Box>;

  const options = {
    title,
    sankey: {
      iterations: 3000,
      link: { color: { fill: brand_600 } },
      node: {
        nodePadding: 20,
        width: 30,
        colors: [brand_500],

        label: {
          fontName: 'Nunito',
          fontSize: 14,
          color: brand_200,
          bold: true,
          italic: false,
        },
      },
    },
  } satisfies ReactGoogleChartProps['options'];

  return (
    <Stack gap="8" ref={ref}>
      <Box>
        <H2Heading size="lg" textAlign="center">
          {title}
        </H2Heading>
      </Box>

      <Box>
        <Skeleton loading={loading} minHeight="brand.500">
          <Box textAlign="center">
            <Chart
              chartVersion="51"
              chartType="Sankey"
              width="100%"
              height="500px"
              data={data}
              options={options}
            />
          </Box>
        </Skeleton>
      </Box>
    </Stack>
  );
});
