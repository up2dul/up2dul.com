import Head from 'next/head';
import type { NextPage } from 'next';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Hello Next.js</title>
      <meta name='description' content='Crafted using Next.js' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <h1>Hello Next.js h1</h1>
    <h2>Hello Next.js h2</h2>
    <h3>Hello Next.js h3</h3>
    <h4>Hello Next.js h4</h4>
    <h5>Hello Next.js h5</h5>

    <p>this is paragraph</p>
  </>
);

export default Home;
