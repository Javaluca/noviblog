import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import Post from '../interfaces/Post';
import markdownToHtml from './markdownToHtml';

const postsDirectory = join(process.cwd(), 'src', '_posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []): Post {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const ret: Post = {} as Post;
  ret.slug = realSlug;
  ret.content = content;
  

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (typeof data[field] !== 'undefined') {
        (ret as any)[field] = data[field];
    }
  });

  ret.date = new Date(data.date);

  return ret;
}

export function getAllPosts(fields: string[] = []): Post[] {
  const slugs = getPostSlugs();
  const posts: Post[] = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
