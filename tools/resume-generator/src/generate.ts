import path from 'path';
import { Browser, launch, Page } from 'puppeteer';

import { prepareOutputFolder } from './folder';

const width = 827;
const height = 1170;
const viewPort = { width, height };

type LanguageVersion = { locale: string; language: string; suffix: string };
const languageVersions: LanguageVersion[] = [
  { locale: 'fr-FR', language: 'fr', suffix: '/fr' },
  { locale: 'en-US', language: 'en', suffix: '/en' },
];

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
  language: LanguageVersion['language'],
): Promise<void> {
  try {
    console.log('[PDF] Generating PDF for page', { url });

    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 0,
    });
    await page.waitForNetworkIdle({ idleTime: 500 });

    const filename = `LOUVET_Celine_${language.toUpperCase()}`;

    const filepath = path.join(path.resolve(outFolder), filename);

    await page.emulateMediaType('print');
    await page.screenshot({
      path: `${filepath}.png`,
      captureBeyondViewport: false,
      fullPage: true,
    });

    console.log('[PDF] Page loaded', { url, filepath, language });

    await page.pdf({
      format: 'A4',
      path: `${filepath}.pdf`,
      printBackground: true,
      margin: {
        top: '10mm',
        left: '10mm',
        bottom: '10mm',
        right: '10mm',
      },
    });

    console.log('[PDF] PDF generated for page', { url, language, filepath });
  } catch (error: unknown) {
    console.error("[PDF] Couldn't print the page", { url, language, error });
    throw error;
  }
}

async function printVersion(
  { language, suffix, locale }: LanguageVersion,
  rootUrl: string,
  outFolder: string,
) {
  const browser = await launch({
    headless: true,
    args: [
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--disable-setuid-sandbox',
      '--no-sandbox',
      `--lang=${locale}`,
    ],
    env: { LANGUAGE: locale.replace('-', '_') },
    defaultViewport: viewPort,
  });

  const page = await openPage(browser);
  await page.setExtraHTTPHeaders({ 'Accept-Language': locale });
  await printPage(`${rootUrl}${suffix}`, page, outFolder, language);

  await browser.close();
}

export async function printPdf(
  pageUrl: string,
  outFolder: string = '_generated',
): Promise<void> {
  console.log('[PDF] Generating slides', { pageUrl, outFolder });

  try {
    const rootUrl = `${pageUrl}/resume/print`;

    await prepareOutputFolder(outFolder);

    console.log(`[PDF] Generating ${languageVersions.length} PDFs`);

    for (const languageVersion of languageVersions) {
      printVersion(languageVersion, rootUrl, outFolder);
    }

    console.log('[PDF] Finished');
  } catch (error: unknown) {
    console.error(`Error while generating: ${error}`);
    throw error;
  }
}
