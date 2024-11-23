import { Button, Card, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Card.Root>
      <Card.Header>I’m a header</Card.Header>
      <Card.Body>
        <Text>Hello World</Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="solid">Blob</Button>
      </Card.Footer>
    </Card.Root>
  );
}
