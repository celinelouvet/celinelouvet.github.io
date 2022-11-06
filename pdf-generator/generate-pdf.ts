import fs from "fs";
import yargs from "yargs";
import { Browser, launch, Page } from "puppeteer";

type Arguments = {
  pageUrl: string;
  pdf: string;
  image: string;
};

const { pdf, image, pageUrl } = yargs(process.argv.slice(2))
  .scriptName("generate-pdf")
  .usage("Usage: $0 --pdf LOUVET_Celine.pdf --image LOUVET_Celine.png --pageUrl http://localhost:3000")
  .options({
    pdf: { type: "string", demandOption: true, default: "cv.pdf" },
    image: { type: "string", demandOption: true, default: "cv.png" },
    pageUrl: { type: "string", demandOption: true, default: "http://localhost:3000" },
  }).argv as Arguments;

async function exists(path: string): Promise<boolean> {
  try {
    await fs.promises.access(path);
    return true;
  } catch (error) {
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
        page.on("error", (error) => reject(error));
        page.on("pageerror", (error) => reject(error));

        resolve(page);
      })
      .catch((error) => reject(error));
  });
}

async function screenshotPage(url: string, imagePath: string) {
  try {
    console.log("[PDF] Generating screenshot", { url, imagePath });

    const browser = await launch({
      headless: true,
      args: ["--disable-gpu", "--disable-dev-shm-usage", "--disable-setuid-sandbox", "--no-sandbox"],
    });

    const page = await openPage(browser);
    await page.goto(url, { waitUntil: "networkidle2" });
    await page.waitForNetworkIdle({ idleTime: 500 });
    console.log("[PDF] Page loaded", { url });

    await page.emulateMediaType("print");
    await page.screenshot({ path: imagePath });

    await browser.close();
    console.log("[PDF] Screenshot generated");
  } catch (error) {
    console.error("[PDF] Couldn't screenshot the page", { path: url, error });
    throw error;
  }
}

async function printPage(url: string, pdfPath?: string): Promise<Buffer> {
  try {
    console.log("[PDF] Generating PDF", { url, pdfPath });

    const browser = await launch({
      headless: true,
      args: ["--disable-gpu", "--disable-dev-shm-usage", "--disable-setuid-sandbox", "--no-sandbox"],
    });

    const page = await openPage(browser);
    await page.goto(url, { waitUntil: "networkidle2" });
    await page.waitForNetworkIdle({ idleTime: 500 });
    console.log("[PDF] Page loaded", { url });

    const pdfBuffer = await page.pdf({
      printBackground: true,
      format: "A4",
      ...(pdfPath && { path: pdfPath }),
      margin: {
        top: "10mm",
        left: "10mm",
        bottom: "10mm",
        right: "10mm",
      },
    });

    await browser.close();
    console.log("[PDF] PDF generated");

    return pdfBuffer;
  } catch (error) {
    console.error("[PDF] Couldn't print the page", { path: url, error });
    throw error;
  }
}

export async function run(): Promise<void> {
  try {
    console.log("[PDF] Starting", { pdf, image, pageUrl });

    const pdfFile = `./${pdf}`;
    const imageFile = `./${image}`;

    await cleanPrevious(pdfFile);
    await cleanPrevious(imageFile);
    await screenshotPage(pageUrl, imageFile);
    await printPage(pageUrl, pdfFile);

    console.log("[PDF] Finished");
  } catch (error) {
    console.error(`Error while generating: ${error}`);
  }
}

if (require.main === module) {
  run();
}
