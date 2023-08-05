import { getAllPosts } from '@/services/post-service';
import PostPreview from '../components/post-preview';
import Post from '../interfaces/Post';
import markdownToHtml from '../services/markdownToHtml';

export default async function Home() {

  const posts: Post[] = await getPosts();

  return (
        <>
        {
          posts?
            posts.map(p => <PostPreview key={p.slug} post={p} />)
          : 'No posts'
        }
        </>
  )
}

async function getPosts(item: number = 10): Promise<Post[]> {
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
    p.content = await markdownToHtml((p.content || '').substring(0, 200));
  }

  return posts;
}
