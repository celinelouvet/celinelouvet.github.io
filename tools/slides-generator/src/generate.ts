import path from 'path';
import { Browser, launch, Page } from 'puppeteer';

import { prepareOutputFolder } from './folder';

const width = 1600;
const height = 900;
const viewPort = { width, height };

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

async function printPage(
  url: string,
  page: Page,
  outFolder: string,
): Promise<void> {
  try {
    console.log('[PDF] Generating PDF for page', { url });

    page.setDefaultNavigationTimeout(0);
    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 0,
    });
    await page.waitForNetworkIdle({ idleTime: 500 });

    const title = await page.title();
    const filename = title.replaceAll(' ', '_') + '.pdf';

    const filepath = path.join(path.resolve(outFolder), filename);

    console.log('[PDF] Page loaded', { url, title, filepath });

    await page.pdf({
      ...viewPort,
      timeout: 0,

      printBackground: true,
      path: filepath,
      margin: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
    });

    console.log('[PDF] PDF generated for page', { url, filepath });
  } catch (error: unknown) {
    console.error("[PDF] Couldn't print the page", { path: url, error });
    throw error;
  }
}

export async function printPdf(
  pageUrl: string,
  talkSubjectId: string,
  outFolder: string = '_generated',
): Promise<void> {
  console.log('[PDF] Generating slides', { pageUrl, talkSubjectId, outFolder });

  try {
    const urls = [
      `${pageUrl}/slides/${talkSubjectId}/print`,
      `${pageUrl}/slides/${talkSubjectId}/print-notes`,
    ];

    await prepareOutputFolder(outFolder);

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
      await printPage(url, page, outFolder);
    }

    console.log('[PDF] Finished');

    await browser.close();
  } catch (error: unknown) {
    console.error(`Error while generating: ${error}`);
    throw error;
  }
}
