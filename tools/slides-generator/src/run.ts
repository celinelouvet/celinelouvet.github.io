import { program } from 'commander';
import { printPdf } from './generate.ts';

program
  .option('--pageUrl [pageUrl]', 'The URL of the page to generate slides from', 'http://localhost:5173')
  .option('--out [out]', 'The output folder for the generated slides', '_generated')
  .argument('<talkSubjectId>', 'The ID of the talk subject to generate slides for');

program.parse();

const pageUrl = program.opts().pageUrl;
const outFolder = program.opts().out;
const talkSubjectId = program.args[0];

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
