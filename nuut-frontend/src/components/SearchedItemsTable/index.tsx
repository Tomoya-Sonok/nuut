export const SearchedItemsTable = () => {
  return (
    <div className="mx-auto pt-8 sm:w-3/4 lg:w-1/2">
      <p className="pb-4">検索履歴</p>
      <div className="w-full">
        <table className="table w-full border-separate border-spacing-0">
          {/* head */}
          <thead>
            <tr>
              <th className="text-base text-white bg-primary">食品名</th>
              <th className="text-base text-white bg-primary">検索回数</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {/* row 1 */}
            <tr className="hover cursor-pointer">
              <td className="block border border-r-0 border-b-0 border-base-200 w-60 sm:w-80 md:w-96 lg:w-[30rem] 2xl:w-[38rem] truncate">
                肉類/＜畜肉類＞/ぶた
              </td>
              <td className="border border-l-0 border-b-0 border-base-200 w-60 sm:w-80 md:w-96 lg:w-[30rem] 2xl:w-[38rem] truncate">
                ７回
              </td>
            </tr>
            {/* row 2 */}
            <tr className="hover cursor-pointer">
              <td className="block border border-r-0 border-b-0 border-base-200 w-60 sm:w-80 md:w-96 lg:w-[30rem] 2xl:w-[38rem] truncate">
                豆類/だいず
              </td>
              <td className="border border-l-0  border-b-0 border-base-200 w-60 sm:w-80 md:w-96 lg:w-[30rem] 2xl:w-[38rem] truncate">
                ５回
              </td>
            </tr>
            {/* row 3 */}
            <tr className="hover cursor-pointer">
              <td className="block border border-r-0 border-b-0 border-base-200 w-60 sm:w-80 md:w-96 lg:w-[30rem] 2xl:w-[38rem] truncate">
                肉類/＜鳥肉類＞/にわとり肉類/＜鳥肉類＞/にわとり肉類/＜鳥肉類＞/にわとり
              </td>
              <td className="border border-l-0 border-b-0 border-base-200 w-60 sm:w-80 md:w-96 lg:w-[30rem] 2xl:w-[38rem] truncate">
                ２回
              </td>
            </tr>
            {/* row 4 */}
            <tr className="hover cursor-pointer">
              <td className="block border border-r-0 border-base-200 w-60 sm:w-80 md:w-96 lg:w-[30rem] 2xl:w-[38rem] truncate">
                野菜類/こまつな
              </td>
              <td className="border border-l-0 border-base-200 w-60 sm:w-80 md:w-96 lg:w-[30rem] 2xl:w-[38rem] truncate">
                １回
              </td>
            </tr>
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
