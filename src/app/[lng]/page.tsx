import { useTranslation } from "@/app/i18n";
import Link from "next/link";
import { Button, Card, Text } from "@chakra-ui/react";
import { PageParams } from "./types";

export default async function Page({ params }: { params: PageParams }) {
  const { lng } = await params;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, "common");

  return (
    <>
      <h1>Hi there!</h1>
      <p>Current language: {lng}</p>
      <p>{t("plop")}</p>
      <Link href={`/${lng}/second-page`}>second page</Link>

      <Card.Root>
        <Card.Header>I’m a header</Card.Header>
        <Card.Body>
          <Text>Hello World</Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="solid">Blob</Button>
        </Card.Footer>
      </Card.Root>
    </>
  );
}
