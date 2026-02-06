import { argv } from 'node:process';
import { parseArgs } from 'node:util';
import { printPdf } from './generate.ts';

const { values } = parseArgs({
  args: argv,
  options: {
    pageUrl: {
      type: 'string',
      default: 'http://localhost:5173',
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
const outFolder = values.out;

try {
  await printPdf(pageUrl, outFolder);
} catch (error) {
  console.error('Error while generating slides', { error });
  process.exit(1);
}
