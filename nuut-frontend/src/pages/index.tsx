// import Error from "next/error";
import { GetServerSideProps } from "next";
import { Home } from "@/components/Home";
import { GsspTest } from "@/components/GsspTest";

type Props = {
  posts: [
    {
      title: string;
      body: string;
    }
  ];
};

const Page = (props: Props) =>
  props.posts ? <GsspTest posts={props.posts} /> : <Home />;

// TODO: エラーハンドリングの追加
// if (statusCode) {
//   return <Error statusCode={statusCode} />;
// }

// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//   // try {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/posts`);
//   const data: Props = await res.json();
//   return {
//     props: { ...data },
//   };
//   // }
//   // TODO: エラーハンドリングの追加
//   // catch (err) {
//   //   return {
//   //     statusCode: err.response ? err.response.status : 500,
//   //   };
//   // }
// };

export default Page;
