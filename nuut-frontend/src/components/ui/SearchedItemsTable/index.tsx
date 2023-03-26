import { SORT_METHODS } from "@/lib/constants";
import { useSearchedItemsTable } from "./useSearchedItemsTable";

// type Props = {
//   howToSort: string;
//   setHowToSort: React.Dispatch<React.SetStateAction<string>>;
//   sortFoodList: (howToSort: string) => foodList;
// };

export const SearchedItemsTable = () => {
  const { howToSort, setHowToSort, sortFoodList } = useSearchedItemsTable({});
  return (
    <div className="mx-auto pt-8 sm:w-3/4 lg:w-1/2">
      <p className="pb-4">検索履歴</p>
      <div className="w-full">
        <table className="table w-full border-separate border-spacing-0">
          <thead>
            <tr>
              <th className="text-base text-white bg-primary">食品名</th>
              <th className="text-base text-white bg-primary">
                <select
                  value={howToSort}
                  onChange={(e) => setHowToSort(e.target.value)}
                  className="select bg-opacity-0"
                >
                  {SORT_METHODS.map((v, i) => (
                    <option key={i} value={v.value}>
                      {v.label}
                    </option>
                  ))}
                </select>
              </th>
            </tr>
          </thead>
          <tbody className="w-full">
            {sortFoodList(howToSort).map((food) => {
              return (
                <tr className="hover cursor-pointer" key={food.id}>
                  <td className="block border border-r-0 border-t-0 border-base-200 md:w-96 lg:w-[21rem] xl:w-[29rem] 2xl:w-[38rem] truncate">
                    {food.name}
                  </td>
                  <td className="border border-l-0 border-t-0 border-base-200 pl-8 md:w-96 lg:w-[21rem] xl:w-[29rem] 2xl:w-[38rem] truncate">
                    {howToSort === "sortByDays"
                      ? `${food.daysSinceSearched} 日前`
                      : `${food.count} 回`}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="pt-8 text-right">
        <div className="btn-group justify-end">
          <button className="text-white btn bg-primary">«</button>
          <button className="text-white btn btn-disabled bg-primary">
            ページ１
          </button>
          <button className="text-white btn bg-primary">»</button>
        </div>
      </div>
    </div>
  );
};
