import Head from 'next/head';
import Balancer from 'react-wrap-balancer';
import type { NextPage } from 'next';

import ContactList from '@/components/ContactList';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Hello Next.js</title>
      <meta name='description' content='Crafted using Next.js' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <h1>
      👋 Hi there, <br />
      I&apos;m <span className='text-gradient'>Abdul Malik</span>!
    </h1>

    <ContactList />

    <p>
      <Balancer>
        A self-taught developer who is currently interested and diving into the
        world of Frontend web development.
      </Balancer>
    </p>
  </>
);

export default Home;
