import { useState } from "react";
import { foodList } from "@/lib/type";
import { FOOD_LIST } from "@/lib/constants";

type Props = {};

export function useSearchFood({}: Props) {
  const [howToSort, setHowToSort] = useState<string>("sortByDays");
  const sortFoodList = (sortMethod: string): foodList => {
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
  };

  return {
    howToSort,
    setHowToSort,
    sortFoodList,
  } as const;
}
