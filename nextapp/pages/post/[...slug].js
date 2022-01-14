import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <p>Post: {slug ? slug.join(', ') : null}</p>;
};

export default Post;
