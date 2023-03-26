type Props = {
  posts: [
    {
      title: string;
      body: string;
    }
  ];
};

export const GsspTest = (props: Props) => {
  return (
    <div className="m-8">
      <h2 className="text-4xl font-bold underline pb-4">POSTS</h2>
      <ul>
        {props.posts.map((post, index) => {
          return <li key={index}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
};
