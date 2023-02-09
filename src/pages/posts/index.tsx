import { NextSeo } from 'next-seo';

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

    <h2>Posts</h2>
  </>
);

export default Posts;
