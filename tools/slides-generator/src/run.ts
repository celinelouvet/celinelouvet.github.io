import fs from 'fs';
import { Browser, launch, Page } from 'puppeteer';
import { parseArgs } from 'util';

const { values } = parseArgs({
  args: Bun.argv,
  options: {
    pageUrl: {
      type: 'string',
      default: 'http://localhost:5173',
    },
  },
  strict: true,
  allowPositionals: true,
});

const pageUrl = values.pageUrl;

const width = 1600;
const height = 900;
const viewPort = { width, height };

async function listPdfs(path = './'): Promise<string[]> {
  try {
    const items = await fs.promises.readdir(path, { withFileTypes: true });
    return items
      .filter((item) => item.isFile())
      .map((item) => item.name)
      .filter((name) => name.endsWith('.pdf'));
  } catch (error: unknown) {
    return [];
  }
}

async function cleanPreviousPdfs() {
  const pdfs = await listPdfs();
  if (pdfs.length > 0) {
    console.log(`[PDF] Deleting ${pdfs.length} files`);

    for (const pdf of pdfs) {
      await fs.promises.unlink(`./${pdf}`);
      console.log(`[PDF] File deleted "${pdf}"`);
    }
  }
}

async function openPage(browser: Browser): Promise<Page> {
  return new Promise((resolve, reject) => {
    console.info('[PDF] Opening page');

    browser
      .newPage()
      .then((page) => {
        page.once('response', (response) => {
          const code = response.status();

          if (code !== 200) {
            const text = response.statusText();
            return reject(text);
          }
          resolve(page);
        });
        page.on('error', (error: unknown) => reject(error));
        page.on('pageerror', (error: unknown) => reject(error));

        resolve(page);
      })
      .catch((error: unknown) => reject(error));
  });
}

async function printPage(url: string, page: Page): Promise<void> {
  try {
    console.log('[PDF] Generating PDF for page', { url });

    await page.goto(url, { waitUntil: 'networkidle2', timeout: 0 });
    await page.waitForNetworkIdle({ idleTime: 500 });

    const title = await page.title();
    const filename = title.replaceAll(' ', '_') + '.pdf';

    console.log('[PDF] Page loaded', { url, title, filename });

    await page.pdf({
      ...viewPort,

      printBackground: true,
      path: filename,
      margin: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
    });

    console.log('[PDF] PDF generated for page', { url });
  } catch (error: unknown) {
    console.error("[PDF] Couldn't print the page", { path: url, error });
    throw error;
  }
}

async function printPdf() {
  try {
    const urls = [
      `${pageUrl}/slides/highway-to-fail/print`,
      `${pageUrl}/slides/highway-to-fail/print-notes`,
    ];
    await cleanPreviousPdfs();

    console.log(`[PDF] Generating ${urls.length} PDFs`);
    const browser = await launch({
      headless: true,
      args: [
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--disable-setuid-sandbox',
        '--no-sandbox',
      ],
    });

    const page = await openPage(browser);
    await page.setViewport(viewPort);

    for (const url of urls) {
      await printPage(url, page);
    }

    console.log('[PDF] Finished');

    await browser.close();
  } catch (error: unknown) {
    console.error(`Error while generating: ${error}`);
  }
}

await printPdf();
