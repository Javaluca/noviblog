import fs from 'fs';
import { join, relative } from 'path';
import matter from 'gray-matter';
import Post from '../interfaces/Post';
import markdownToHtml from './markdownToHtml';

const postsDirectory = join(process.cwd(), 'posts');

const getFilesRecursively = (directory: string) : string[] => {
  let ret: string[] = [];
  const filesInDirectory = fs.readdirSync(directory);
  for (const file of filesInDirectory) {
    const absolute = join(directory, file);
    if (fs.statSync(absolute).isDirectory()) {
      ret = ret.concat(getFilesRecursively(absolute));
    } else {
        ret.push(absolute);
    }
  }
  return ret;
};

export function getPostSlugs() {
  return getFilesRecursively(postsDirectory)
    .map(p => relative(postsDirectory, p))
    .map(p => p.replace(/\\/g, '/'));
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
    .filter(slug => slug.endsWith(".md"))
    .map((slug) => {
      try {
        return getPostBySlug(slug, fields)
      } catch(e) {
        return null as any;
      }
    })
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}


