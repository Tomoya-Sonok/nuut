import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { SearchedItemsTable } from ".";

type T = typeof SearchedItemsTable;
type Story = ComponentStoryObj<T>;

export default {
  title: "SearchedItemsTable",
  component: SearchedItemsTable,
} as ComponentMeta<T>;

export const Default: Story = {};
