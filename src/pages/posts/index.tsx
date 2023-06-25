import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import Balancer from 'react-wrap-balancer';

import { slideVariants } from '@/lib/motion';

const Posts = () => (
  <>
    <NextSeo
      title='Posts'
      description='My thoughts, notes, blog, or any things that may be useful'
      openGraph={{
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/posts`,
        title: 'Posts',
        description: 'My posts',
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/og?title=My posts`,
            width: 1200,
            height: 630,
            type: 'image/jpeg',
          },
        ],
      }}
    />

    <motion.section
      variants={slideVariants(0.2)}
      initial='hidden'
      animate='show'
    >
      <h2>✍️ Posts</h2>
      <p className='mt-3'>
        <Balancer>My personal thoughts, notes, blog, or any things.</Balancer>
      </p>
    </motion.section>

    <motion.section
      variants={slideVariants(0.4)}
      initial='hidden'
      animate='show'
      className='mt-10'
    >
      <p>
        <Balancer>
          Hi there! I am not using this page anymore for my blog posts, I have
          moved to:{' '}
          <a
            href='https://blog.up2dul.com'
            target='_blank'
            rel='noreferrer'
            className='text-link cursor-newtab'
          >
            My new blog
          </a>
        </Balancer>
      </p>
    </motion.section>
  </>
);

export default Posts;
