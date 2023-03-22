import type { StoryObj, Meta } from "@storybook/react";
import { SearchedItemsTable } from ".";
import { foodList } from "@/lib/type";
import { FOOD_LIST } from "@/lib/constants";

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
    setHowToSort: { control: { type: null } },
  },
  args: {
    howToSort: "sortByDays",
    setHowToSort: () => [],
    sortFoodList: (sortMethod: string): foodList => {
      switch (sortMethod) {
        // 経過日数ソートの場合
        case "sortByDays":
          return FOOD_LIST.sort((a, b) =>
            a.daysSinceSearched < b.daysSinceSearched ? -1 : 1
          );
        // 検索回数ソートの場合
        case "sortByCount":
          return FOOD_LIST.sort((a, b) => (a.count > b.count ? -1 : 1));
        default:
          return FOOD_LIST.sort((a, b) =>
            a.daysSinceSearched < b.daysSinceSearched ? -1 : 1
          );
      }
    },
  },
} as Meta<T>;

export const Default: Story = {};
