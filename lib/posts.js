import { readdir, readFile } from "fs/promises"
import matter from "gray-matter";
import { marked } from 'marked';

export async function getPost(slug) {
  const source = await readFile(`content/posts/${slug}.md`, "utf8")
  const { data: { date, title }, content } = matter(source)
  const body = marked(content)
  return {
    title,
    date,
    body
  }
}


export async function getSlugs() {
  const files = await readdir("content/posts")

  const suffix = ".md";
  return files.filter(file => file.endsWith(suffix))
    .map(file => file.slice(0, -suffix.length))
}

export async function getPosts() {
  const slugs = await getSlugs()

  const posts = []
  for (const slug of slugs) {
    const post = await getPost(slug)
    posts.push({ slug, title: post.title })
  }

  return posts
}
