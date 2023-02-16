import { FC } from 'react';
import { IPost } from '../interfaces';

interface IPostInfoProps {
  post: IPost;
}

const PostInfo: FC<IPostInfoProps> = ({ post }) => {
  const { title, body } = post || {};

  if (!post) {
    return <h3>Empty post</h3>;
  }

  return (
    <>
      <h3>{title}</h3>
      <p>{body}</p>
    </>
  );
};

export default PostInfo;
