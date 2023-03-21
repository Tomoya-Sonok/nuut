import type { StoryObj, Meta } from "@storybook/react";
import { SearchedItemsTable } from ".";

type T = typeof SearchedItemsTable;
type Story = StoryObj<T>;

export default {
  title: "SearchedItemsTable",
  component: SearchedItemsTable,
  argTypes: {
    howToSort: {
      control: { type: "radio" },
      options: ["sortByDays", "sortByCount"],
    },
  },
  args: {
    howToSort: "sortByDays",
    setHowToSort: () => {},
    sortFoodList: () => [
      {
        id: 1,
        name: "肉類/＜畜肉類＞/ぶた",
        daysSinceSearched: 3,
        count: 7,
      },
      {
        id: 2,
        name: "豆類/だいず",
        daysSinceSearched: 4,
        count: 5,
      },
      {
        id: 3,
        name: "肉類/＜鳥肉類＞/にわとり",
        daysSinceSearched: 6,
        count: 2,
      },
      {
        id: 4,
        name: "野菜類/こまつな",
        daysSinceSearched: 1,
        count: 1,
      },
    ],
  },
} as Meta<T>;

export const Default: Story = {};
