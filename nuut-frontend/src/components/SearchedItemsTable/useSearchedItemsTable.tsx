type Props = {};

export function useSearchedItemsTable({}: Props) {
  const foodList = [
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
  ];

  return {
    foodList,
  } as const;
}
