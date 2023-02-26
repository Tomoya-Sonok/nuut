import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputSchema, InputType } from "@/lib/schema/Home/schema";

// type Inputs = {
//   example: string;
// };

export const Home = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputType>({
    resolver: zodResolver(InputSchema),
  });

  const onSubmit: SubmitHandler<InputType> = (data) => console.log(data);
  console.log(watch("example"));

  return (
    <div className="container mx-auto py-8 px-12">
      <h1 className="text-4xl leading-normal font-medium text-center pt-4 pb-8">
        nuut
        <br /> 〜食品成分検索アプリ〜
      </h1>
      <p className="w-3/4 mx-auto lg:w-1/2">
        ようこそ！
        <br />
        nuut（ヌート）とは、食品に含まれる成分をより手軽に効率よく調べることができるアプリです。
        文部科学省が5年ごとに更新・公開している「日本食品標準成分表」（現在は2020年版の八訂が最新）に準拠しているため、信頼できる情報源としてお使いいただけます。
      </p>
      <div className="w-1/2 pt-8 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="検索する食品名を入力してください"
                className="input input-bordered w-full"
                defaultValue=""
                {...register("example")}
              />
              <button
                type="submit"
                className="btn btn-square bg-primary border-transparent hover:bg-primary hover:border-transparent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          {errors.example && (
            <div className="alert alert-error shadow-lg mt-2 p-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{errors.example.message}</span>
              </div>
            </div>
          )}
        </form>
      </div>
      <div className="w-3/4 pt-8 mx-auto lg:w-1/2">
        <p className="pb-4">検索履歴</p>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="text-base text-white bg-primary border-base-200 border-b-2">
                  食品名
                </th>
                <th className="text-base text-white bg-primary border-base-200 border-b-2">
                  検索回数
                </th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="hover">
                <td>肉類/＜畜肉類＞/ぶた</td>
                <td>７回</td>
              </tr>
              {/* row 2 */}
              <tr className="hover">
                <td>豆類/だいず</td>
                <td>５回</td>
              </tr>
              {/* row 3 */}
              <tr className="hover">
                <td>肉類/＜鳥肉類＞/にわとり</td>
                <td>２回</td>
              </tr>
              {/* row 4 */}
              <tr className=" hover">
                <td>野菜類/こまつな</td>
                <td>１回</td>
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
      <footer className="footer footer-center pt-16 bg-base-100 text-base-content">
        <div>
          <p>©︎ 2023 nuut. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
