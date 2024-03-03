import { Button, Link, Tooltip } from '@chakra-ui/react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { BsFileEarmarkPdfFill } from 'react-icons/bs';

import { useLogger } from '@/hooks';

const root =
  'https://storage.googleapis.com/celinelouvet-cv.appspot.com/resume';

export const PdfDownloader: FC = () => {
  const { log } = useLogger();
  const { i18n } = useTranslation();

  const file = `${root}/LOUVET_Celine_${i18n.language.toUpperCase()}.pdf`;
  const fileName = 'LOUVET_Celine.pdf';
  return (
    <Link href={file} download={fileName} isExternal>
      <Tooltip label="Download PDF">
        <Button
          leftIcon={<BsFileEarmarkPdfFill />}
          size="sm"
          onClick={() => log('PDF')}
        >
          PDF
        </Button>
      </Tooltip>
    </Link>
  );
};
