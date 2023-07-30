import Post from '@/app/interfaces/Post';
import markdownToHtml from '@/app/services/markdownToHtml';
import { getPostBySlug } from '@/app/services/post-service';
import Head from 'next/head';

type Props = {
    post: Post,
    morePosts: Post [],
    preview?: boolean
  }

export default async function Post({ params }: { params: { slug: string } }) {
    const post: Post = await getPost(params);

    const title = `${post.title} | NoviBlog`;

    return (
      <>
        <Head>
          <title>{title}</title>
          <meta property="og:title" content={title} key="title" />
        </Head>
          <div className={`prose lg:prose-xl max-w-none`}
                  dangerouslySetInnerHTML={{ __html: post.content }}>
          </div>
          <div className="flex flex-wrap gap-1">
              { post.tags.map(t => <span key={t} className="badge badge-secondary badge-outline">{t}</span>)}
          </div>
      </>
    );
  }
  
  type Params = {
    params: {
      slug: string
    }
  }
  
  export async function getPost( params : { slug: string }) {
    const post = getPostBySlug(params.slug, [
      'title',
      'date',
      'slug',
      'author',
      'content',
      'tags'
    ]);

    const content = await markdownToHtml(post.content || '');
    post.content = content;
  
    return post;
  }