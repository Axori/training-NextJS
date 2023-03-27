import React from 'react';
import Head from "next/head"
import Link from "next/link";

const HomePage = () => (
  <>
    <Head>
      <title>Home - Blog</title>
    </Head>
    <main>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="/posts/first-post">First Post</Link>
        </li>
      </ul>
    </main>
  </>

);


export default HomePage;