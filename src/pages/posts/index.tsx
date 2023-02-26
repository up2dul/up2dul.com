import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import Balancer from 'react-wrap-balancer';

import { allPosts, type Post } from 'contentlayer/generated';

import Card from '@/components/Card';
import { slideVariants } from '@/lib/motion';
import { selectField } from '@/lib/utils';

const Posts = ({
  posts,
}: {
  posts: Pick<Post, 'slug' | 'title' | 'description' | 'tags'>[];
}) => (
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
        <Balancer>My thoughts, notes, blog, or any things.</Balancer>
      </p>
    </motion.section>

    <motion.section
      variants={slideVariants(0.4)}
      initial='hidden'
      animate='show'
      className='mt-10 grid w-full grid-cols-1 gap-12 lg:grid-cols-2'
    >
      {posts.map((post, idx) => (
        <Card
          {...post}
          key={post.slug}
          href={`/posts/${post.slug}`}
          order={`0${++idx}`}
        />
      ))}
    </motion.section>
  </>
);

export function getStaticProps() {
  const posts = allPosts
    .map((post) =>
      selectField(post, ['slug', 'title', 'description', 'tags', 'createdAt']),
    )
    .sort(
      (a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt)),
    );

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
