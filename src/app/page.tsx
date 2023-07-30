import Image from 'next/image'
import { getAllPosts } from '@/app/services/post-service';
import PostPreview from './components/post-preview';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import markdownToHtml from './services/markdownToHtml';
import Post from './interfaces/Post';
import Link from 'next/link';

export default async function Home() {

  const posts: Post[] = await getPosts();

  return (
        <>
        {
          posts?
            posts.map(p => <PostPreview post={p} />)
          : 'No posts'
        }
        </>
  )
}

export async function getPosts(item: number = 10) {
  const fields: string[] = [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'tags'
  ];

  const posts: Post[] = getAllPosts(fields);

  for (const p of posts) {
    p.content = await markdownToHtml(p.content || '');
  }

  return posts;
}
