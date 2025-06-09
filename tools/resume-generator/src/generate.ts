import path from 'path';
import { Browser, launch, Page } from 'puppeteer';

import { prepareOutputFolder } from './folder';

const width = 1600;
const height = 900;
const viewPort = { width, height };

type Languages = 'en' | 'fr';

async function addCookie(
  browser: Browser,
  language: Languages,
  url: string,
): Promise<void> {
  await browser.setCookie({
    name: 'i18next',
    value: language,
    domain: url.replace(/https?:\/\//, ''),
    path: '/resume',
    expires: -1,
    httpOnly: false,
    secure: url.startsWith('https://'),
    sourceScheme: 'NonSecure',
  });
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

async function printPage(
  url: string,
  page: Page,
  outFolder: string,
  language: Languages,
): Promise<void> {
  try {
    console.log('[PDF] Generating PDF for page', { url });

    await page.goto(url, { waitUntil: 'networkidle2', timeout: 0 });
    await page.waitForNetworkIdle({ idleTime: 500 });

    const title = await page.title();
    const filename = `${title.replaceAll(' ', '_')}_${language}.pdf`;

    const filepath = path.join(path.resolve(outFolder), filename);

    console.log('[PDF] Page loaded', { url, title, filepath });

    await page.pdf({
      printBackground: true,
      format: 'A4',
      path: filepath,
    });

    console.log('[PDF] PDF generated for page', { url, filepath });
  } catch (error: unknown) {
    console.error("[PDF] Couldn't print the page", { path: url, error });
    throw error;
  }
}

export async function printPdf(
  pageUrl: string,
  outFolder: string = '_generated',
): Promise<void> {
  console.log('[PDF] Generating slides', { pageUrl, outFolder });

  try {
    const url = `${pageUrl}/resume`;

    const languages = ['en', 'fr'] satisfies Languages[];

    await prepareOutputFolder(outFolder);

    console.log(`[PDF] Generating ${languages.length} PDFs`);

    for (const language of languages) {
      const browser = await launch({
        headless: true,
        args: [
          '--disable-gpu',
          '--disable-dev-shm-usage',
          '--disable-setuid-sandbox',
          '--no-sandbox',
          `--lang=${language}`,
        ],

        env: { LANGUAGE: language.replace('-', '_') },
      });

      await addCookie(browser, language, url);
      const page = await openPage(browser);
      await page.setExtraHTTPHeaders({ 'Accept-Language': language });
      await page.setViewport(viewPort);
      await printPage(url, page, outFolder, language);

      await browser.close();
    }

    console.log('[PDF] Finished');
  } catch (error: unknown) {
    console.error(`Error while generating: ${error}`);
    throw error;
  }
}
