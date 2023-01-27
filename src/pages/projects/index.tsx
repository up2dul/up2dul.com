import { NextSeo } from 'next-seo';
import Balancer from 'react-wrap-balancer';
import { motion } from 'framer-motion';

import { slideVariants } from '@/lib/motion';
import Card from '@/components/Card';

const Projects = () => (
  <>
    <NextSeo
      title='Projects'
      openGraph={{
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/projects`,
        title: 'Projects',
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/og?title=My projects`,
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
      <h2>
        🎨 My <span className='text-gradient'>projects</span>
      </h2>
      <p className='mt-3'>
        <Balancer>
          Some of my featured projects, currently there is only website project.
        </Balancer>
      </p>
    </motion.section>

    <motion.section
      variants={slideVariants(0.4)}
      initial='hidden'
      animate='show'
      className='mt-10 grid w-full grid-cols-1 gap-12 lg:grid-cols-2'
    >
      <Card
        href='#'
        order='01'
        title='Todo'
        description='lorem ipsum dolor sit amet john doe jane doe'
      />

      <Card
        href='#'
        order='02'
        title='Forum'
        description='lorem ipsum dolor sit amet john doe jane doe'
      />
    </motion.section>
  </>
);

export default Projects;
