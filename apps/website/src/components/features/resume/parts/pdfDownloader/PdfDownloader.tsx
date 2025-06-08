import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { BsFileEarmarkPdfFill } from 'react-icons/bs';

import { Link, Tooltip } from '@/components/core';
import { useLogger } from '@/hooks';

const root =
  'https://storage.googleapis.com/celinelouvet-cv.appspot.com/resume';

export const PdfDownloader: React.FC = function PdfDownloader() {
  const { log } = useLogger();
  const { i18n } = useTranslation();

  const file = `${root}/LOUVET_Celine_${i18n.language.toUpperCase()}.pdf`;
  const fileName = 'LOUVET_Celine.pdf';
  return (
    <Tooltip label="Download PDF">
      <Link.External
        size="sm"
        variant="solid"
        href={file}
        download={fileName}
        onClick={() => log('PDF')}
      >
        <BsFileEarmarkPdfFill />
        PDF
      </Link.External>
    </Tooltip>
  );
};
