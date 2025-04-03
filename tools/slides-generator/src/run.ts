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
  },
  strict: true,
  allowPositionals: true,
});

const pageUrl = values.pageUrl;
const talkSubjectId = values.talkSubjectId;

if (!talkSubjectId) {
  console.error('Please provide a talkSubjectId');
  process.exit(1);
}

await printPdf(pageUrl, talkSubjectId);
