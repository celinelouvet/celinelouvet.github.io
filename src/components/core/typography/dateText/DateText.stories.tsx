import { Grid, GridItem, Text } from "@chakra-ui/react";
import { type Meta, type StoryObj } from "@storybook/react";

import { DateText, dateTextRecipe } from "./DateText";
import { H2Heading } from "../headings";

const meta = {
  title: "Core/Typography",
  component: DateText,
  args: {
    when: "2023/07/31",
    dateFormat: "MMMM D, YYYY",
  },
} satisfies Meta<typeof DateText>;

const sizes = dateTextRecipe.variants!.size;
const keys = Object.keys(sizes) as Array<keyof typeof sizes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DateTexts: Story = {
  render: (args) => (
    <Grid templateColumns="70px 1fr" columnGap="8" alignItems="baseline">
      <GridItem colSpan={2}>
        <H2Heading>Sizes</H2Heading>
      </GridItem>
      {keys.map((key) => (
        <>
          <GridItem>
            <Text fontWeight="700">
              {key} - {sizes[key].fontSize}
            </Text>
          </GridItem>
          <GridItem>
            <DateText {...args} size={key} />
          </GridItem>
        </>
      ))}
    </Grid>
  ),
};
