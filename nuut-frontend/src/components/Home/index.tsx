import { SearchBox } from "@/components/SearchBox";
import { SearchedItemsTable } from "@/components/SearchedItemsTable";

export const Home = () => {
  return (
    <div className="font-kosugimaru container mx-auto xs:py-2 xs:px-4 sm:py-8 sm:px-12">
      <h1 className="xs:text-xl sm:text-4xl leading-normal font-medium text-center pt-4 pb-8">
        nuut
        <br /> 〜食品成分検索アプリ〜
      </h1>
      <p className="mx-auto sm:w-3/4 lg:w-1/2">
        ようこそ！
        <br />
        nuut（ヌート）とは、食品に含まれる成分をより手軽に効率よく調べることができるアプリです。
        文部科学省が5年ごとに更新・公開している「日本食品標準成分表」（現在は2020年版の八訂が最新）に準拠しているため、信頼できる情報源としてお使いいただけます。
      </p>
      <SearchBox />
      <SearchedItemsTable />
      <footer className="footer footer-center pt-16 bg-base-100 text-base-content">
        <div>
          <p>&copy; 2023 nuut. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
