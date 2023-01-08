// import Error from "next/error";
import { GetServerSideProps } from "next";

type Props = {
  posts: [
    {
      title: string;
      body: string;
    }
  ];
};

const Home = (props: Props) => {
  // TODO: エラーハンドリングの追加
  // if (statusCode) {
  //   return <Error statusCode={statusCode} />;
  // }
  console.log(props);

  return (
    <div>
      <h1>POSTS</h1>
      <ul>
        {!props.posts
          ? null
          : props.posts.map((post, index) => {
              return <li key={index}>{post.title}</li>;
            })}
      </ul>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  // try {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/posts`);
  const data: Props = await res.json();
  return {
    props: { ...data },
  };
  // }
  // TODO: エラーハンドリングの追加
  // catch (err) {
  //   return {
  //     statusCode: err.response ? err.response.status : 500,
  //   };
  // }
};
