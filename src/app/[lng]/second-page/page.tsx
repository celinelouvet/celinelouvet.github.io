import { useTranslation } from "@/app/i18n";
import Link from "next/link";
import { PageParams } from "../types";

export default async function Page({ params }: { params: PageParams }) {
  const { lng } = await params;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, "common");

  return (
    <>
      <h1>Hi from second page!</h1>
      <p>{t("plop2")}</p>
      <Link href={`/${lng}`}>back</Link>
    </>
  );
}
