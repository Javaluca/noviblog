import type Author from './Author';

type Post = {
  slug: string,
  title: string,
  date: Date,
  author: Author,
  tags: string[],
  content: string
};

export default Post;
