import React from 'react';
import { getPost, getSlugs } from "../../lib/posts";
import Head from "next/head";

export async function getStaticPaths() {
  const slugs = await getSlugs()
  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false
  }
}

export async function getStaticProps(context) {
  const post = await getPost(context.params.slug)
  return {
    props: {
      post
    }
  }
}

const Slug = ({ post }) => {
  return (
    <>
      <Head>
        <title>{`${post.title} - Blog`}</title>
      </Head>
      <main>
        <p>{post.date}</p>
        <article dangerouslySetInnerHTML={{ __html: post.body }}/>
      </main>
    </>
  );
};

export default Slug;
