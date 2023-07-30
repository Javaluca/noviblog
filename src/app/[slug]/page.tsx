import Post from '@/interfaces/Post';
import markdownToHtml from '@/services/markdownToHtml';
import { getPostBySlug } from '@/services/post-service';
import Head from 'next/head';

export default async function PostPage({ params }: { params: { slug: string } }) {
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

  
  async function getPost( params : { slug: string }): Promise<Post> {
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