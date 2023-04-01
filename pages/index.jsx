import React from 'react';
import Head from "next/head"
import Link from "next/link";
import { getPosts } from "../lib/posts.js";

export async function getStaticProps() {
  const posts = await getPosts()
  return {
    props: {
      posts
    }
  }
}

const HomePage = ({ posts }) => (
  <>
    <Head>
      <title>Home - Blog</title>
    </Head>
    <main>
      <h1>Home</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  </>

);


export default HomePage;
