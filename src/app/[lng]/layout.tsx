import { dir } from "i18next";
import { LANGUAGES } from "@/app/i18n";
import { PageParams } from "./types";

export async function generateStaticParams() {
  return LANGUAGES.map((lng) => ({ lng }));
}

type LayoutType = {
  children: React.ReactNode;
  params: PageParams;
};

export default async function RootLayout({ children, params }: LayoutType) {
  const { lng } = await params;
  return (
    <html suppressHydrationWarning lang={lng} dir={dir(lng)}>
      <head />
      <body>{children}</body>
    </html>
  );
}
