import fs from 'node:fs';
import path from 'node:path';
import { parseFrontMatter } from './markdown';

const blogDirectory = path.join(process.cwd(), 'content', 'blog');

export function getAllPosts() {
  return fs.readdirSync(blogDirectory)
    .filter((file) => file.endsWith('.md') && !['TEMPLATE.md', 'README.md'].includes(file))
    .map((file) => {
      const source = fs.readFileSync(path.join(blogDirectory, file), 'utf8');
      const { data, content } = parseFrontMatter(source);
      return { ...data, slug: data.slug || file.replace(/\.md$/, ''), content };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPost(slug) {
  return getAllPosts().find((post) => post.slug === slug);
}
