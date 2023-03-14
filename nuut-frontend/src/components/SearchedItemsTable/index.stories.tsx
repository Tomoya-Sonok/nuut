import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { SearchedItemsTable } from ".";

type T = typeof SearchedItemsTable;
type Story = ComponentStoryObj<T>;

export default {
  title: "SearchedItemsTable",
  component: SearchedItemsTable,
  argTypes: {
    sortType: {
      control: { type: "radio" },
      options: ["検索日時ソート", "検索回数ソート"],
    },
  },
  args: {
    sortType: "検索日時ソート",
  },
} as ComponentMeta<T>;

export const Default: Story = {};
