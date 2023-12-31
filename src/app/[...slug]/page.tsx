import Post from '@/interfaces/Post';
import markdownToHtml from '@/services/markdownToHtml';
import { getAllPosts, getPostBySlug } from '@/services/post-service';

export default async function PostPage({ params }: { params: { slug: string[] } }) {
    const post: Post = await getPost(params);
    if (!post) {
      return (
        <h2>404 Post not found</h2>
      );
    }

    const title = `${post.title} | NoviBlog`;

    return (
      <div className='flex flex-col w-full'>
          <div className='text-slate-600 dark:text-slate-400'>
            {post.author.name} | {post.date.toLocaleDateString('en-US', {day: 'numeric', month: 'short', year: 'numeric',}) }
          </div>
          <div className={`prose lg:prose-xl w-full  text-slate-900  dark:text-slate-200 max-w-none`}
                  dangerouslySetInnerHTML={{ __html: post.content }}>
          </div>
          <div className="flex flex-wrap gap-1">
              { post.tags.map(t => <span key={t} className="badge badge-secondary badge-outline">{t}</span>)}
          </div>
      </div>
    );
  }

  
  async function getPost( params : { slug: string[] }): Promise<Post> {

    try {
      const post = getPostBySlug(params.slug.join("/"), [
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

    } catch(e) {
      return null as any;
    }
  }


export async function generateStaticParams() {
  const posts = await getAllPosts(['slug']);
  
  return posts.map((post) => ({
    slug: post.slug.split("/")
  }))
}


export async function generateMetadata({ params }: { params: { slug: string[]}}) {

  const post = await getPostBySlug(params.slug.join("/"), ['title', 'tags', 'author']);

  return {
    title: `${post.title} | NoviBlog`,
    description: 'Blog for coders by coders',
    authors: { name: post.author.name },
    keywords: post.tags
  }
}