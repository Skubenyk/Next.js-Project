import { FC } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { IPost } from '../../interfaces';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts: data },
  };
};

interface IPostsProps {
  posts: [IPost];
}

const Posts: FC<IPostsProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <h1>Posts list:</h1>
      <ul>
        {posts &&
          posts.map(({ id, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Posts;
