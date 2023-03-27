import React from 'react';
import { getPost } from "../../lib/posts";
import Head from "next/head";


export async function getStaticProps() {
  const post = await getPost("first-post")
  return {
    props: {
      post
    }
  }
}

const FirstPost = ({post}) => {
  return (
    <>
      <Head>
        <title>{`${post.title} - Blog`}</title>
      </Head>
      <main>
        <p>{post.date}</p>
        <article dangerouslySetInnerHTML={{__html: post.body}} />
      </main>
    </>
  );
};

export default FirstPost;