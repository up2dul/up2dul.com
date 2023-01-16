import Head from 'next/head';
import Link from 'next/link';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hello Next.js</title>
        <meta name='description' content='Crafted with using Next.js' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1>Hello Next.js</h1>
    </>
  );
};

export default Home;
