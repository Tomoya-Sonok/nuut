import type { StoryObj, Meta } from "@storybook/react";
import { SearchedItemsTable } from ".";

type T = typeof SearchedItemsTable;
type Story = StoryObj<T>;

export default {
  title: "ui/SearchedItemsTable",
  component: SearchedItemsTable,
  argTypes: {},
  args: {},
} as Meta<T>;

export const Default: Story = {};
