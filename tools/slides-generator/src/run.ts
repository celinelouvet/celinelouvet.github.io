import { parseArgs } from 'util';
import { printPdf } from './generate';

const { values } = parseArgs({
  args: Bun.argv,
  options: {
    pageUrl: {
      type: 'string',
      default: 'http://localhost:5173',
    },
    talkSubjectId: {
      type: 'string',
    },
    out: {
      type: 'string',
      default: '_generated',
    },
  },
  strict: true,
  allowPositionals: true,
});

const pageUrl = values.pageUrl;
const talkSubjectId = values.talkSubjectId;
const outFolder = values.out;

if (!talkSubjectId) {
  console.error('Please provide a talkSubjectId');
  process.exit(1);
}

try {
  await printPdf(pageUrl, talkSubjectId, outFolder);
} catch (error) {
  console.error('Error while generating slides', { error });
  process.exit(1);
}
