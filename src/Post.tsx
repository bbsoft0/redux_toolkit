import { useGetPostByIdQuery } from "./services/post";

const Post = () => {
  const { data: post, isLoading } = useGetPostByIdQuery(1);

  return (
    <div className="h-100 d-flex justify-content-center align-items-center flex-column">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h3>{post?.title}</h3>
          <p>{post?.body}</p>
        </>
      )}
    </div>
  );
};

export default Post;
