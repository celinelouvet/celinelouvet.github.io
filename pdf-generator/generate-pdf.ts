import fs from "fs";
import yargs from "yargs";
import { Browser, launch, Page } from "puppeteer";

type Arguments = {
  pageUrl: string;
  pdf: string;
};

type LanguageVersion = { locale: string; language: string; suffix?: string };
const languageVersions: LanguageVersion[] = [
  { locale: "fr-FR", language: "FR", suffix: "/fr" },
  { locale: "en-US", language: "EN", suffix: "/en" },
];

const { pdf, pageUrl } = yargs(process.argv.slice(2))
  .scriptName("generate-pdf")
  .usage("Usage: $0 --pdf LOUVET_Celine --pageUrl http://localhost:3000")
  .options({
    pdf: { type: "string", demandOption: true, default: "cv" },
    pageUrl: { type: "string", demandOption: true, default: "http://localhost:3000" },
  }).argv as Arguments;

async function exists(path: string): Promise<boolean> {
  try {
    await fs.promises.access(path);
    return true;
  } catch (error: unknown) {
    return false;
  }
}

async function cleanPrevious(path: string) {
  const alreadyExists = await exists(path);
  if (alreadyExists) {
    console.log("[PDF] Deleting file", { path });
    await fs.promises.unlink(path);
  }
}

function openPage(browser: Browser): Promise<Page> {
  return new Promise((resolve, reject) => {
    console.info("[PDF] Opening page");

    browser
      .newPage()
      .then((page) => {
        page.once("response", (response) => {
          const code = response.status();

          if (code !== 200) {
            const text = response.statusText();
            return reject(text);
          }
          resolve(page);
        });
        page.on("error", (error: unknown) => reject(error));
        page.on("pageerror", (error: unknown) => reject(error));

        resolve(page);
      })
      .catch((error: unknown) => reject(error));
  });
}

async function printPage(url: string, locale: string, pdfPath: string): Promise<void> {
  try {
    console.log("[PDF] Generating PDF", { url, locale, pdfPath });

    const browser = await launch({
      headless: true,
      args: ["--disable-gpu", "--disable-dev-shm-usage", "--disable-setuid-sandbox", "--no-sandbox", `--lang=${locale}`],
      env: { LANGUAGE: locale.replace("-", "_") },
    });

    const page = await openPage(browser);
    await page.setExtraHTTPHeaders({ "Accept-Language": locale });
    await page.goto(url, { waitUntil: "networkidle2" });
    await page.waitForNetworkIdle({ idleTime: 500 });
    console.log("[PDF] Page loaded", { url });

    await page.pdf({
      printBackground: true,
      format: "A4",
      path: pdfPath,
      margin: {
        top: "10mm",
        left: "10mm",
        bottom: "10mm",
        right: "10mm",
      },
    });

    await browser.close();
    console.log("[PDF] PDF generated");
  } catch (error: unknown) {
    console.error("[PDF] Couldn't print the page", { path: url, error });
    throw error;
  }
}

async function printLanguageVersion({ locale, language, suffix = "" }: LanguageVersion): Promise<void> {
  try {
    const pdfFile = `./${pdf}_${language}.pdf`;
    const url = `${pageUrl}${suffix}/resume`;

    console.log(`[PDF] ${locale} Starting`, { locale, pdfFile, url });

    await cleanPrevious(pdfFile);
    await printPage(url, locale, pdfFile);

    console.log(`[PDF] ${locale} finished`);
  } catch (error: unknown) {
    console.error(`Error while generating: ${error}`);
  }
}

export async function run(): Promise<void> {
  for (const version of languageVersions) {
    await printLanguageVersion(version);
  }
}

if (require.main === module) {
  run();
}
