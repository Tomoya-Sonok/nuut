import { useSearchedItemsTable } from "./useSearchedItemsTable";

export const SearchedItemsTable = () => {
  const { foodList } = useSearchedItemsTable({});
  return (
    <div className="mx-auto pt-8 sm:w-3/4 lg:w-1/2">
      <p className="pb-4">検索履歴</p>
      <div className="w-full">
        <table className="table w-full border-separate border-spacing-0">
          <thead>
            <tr>
              <th className="text-base text-white bg-primary">食品名</th>
              <th className="text-base text-white bg-primary">
                <select className="select bg-opacity-0">
                  <option value="sortByDays" selected>
                    日数
                  </option>
                  <option value="sortByCount">回数</option>
                </select>
              </th>
            </tr>
          </thead>
          <tbody className="w-full">
            {foodList.map((food) => {
              return (
                <tr className="hover cursor-pointer" key={food.id}>
                  <td className="block border border-r-0 border-t-0 border-base-200 w-60 sm:w-80 md:w-96 lg:w-[30rem] 2xl:w-[38rem] truncate">
                    {food.name}
                  </td>
                  <td className="border border-l-0 border-t-0 border-base-200 pl-8 w-60 sm:w-80 md:w-96 lg:w-[30rem] 2xl:w-[38rem] truncate">
                    {food.count} 回
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
