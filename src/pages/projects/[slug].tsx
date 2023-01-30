import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import { allProjects, type Project } from 'contentlayer/generated';
import { Github, Globe } from 'lucide-react';

import { slideVariants } from '@/lib/motion';
import Tag from '@/components/Tag';

const Project = ({ project }: { project: Project }) => {
  const { slug, title, description, tags, demo_link, repo_link } = project;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/projects/${slug}`,
          title,
          description,
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/og?title=${title}`,
              width: 1200,
              height: 630,
              type: 'image/jpeg',
            },
          ],
        }}
      />

      <motion.h2 variants={slideVariants(0.2)} initial='hidden' animate='show'>
        {title}
      </motion.h2>

      <motion.section
        variants={slideVariants(0.4)}
        initial='hidden'
        animate='show'
        className='mt-10 flex flex-col items-center gap-5'
      >
        <figure className='rounded-lg bg-gradient-to-br from-blue-700 to-blue-900 p-1'>
          <Image
            src='/static/images/projects/diforum.webp'
            alt={`${title} screenshot`}
            width={440}
            height={220}
            className='rounded-lg'
          />
        </figure>

        <div className='flex flex-wrap justify-center gap-x-3 gap-y-2'>
          {tags?.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className='flex gap-10'>
          <a
            href={demo_link}
            aria-label='Demo'
            target='_blank'
            className='text-link cursor-alias'
            rel='noreferrer'
          >
            <Globe className='inline w-4' /> Demo
          </a>
          <a
            href={repo_link}
            aria-label='Repository'
            target='_blank'
            className='text-link cursor-alias'
            rel='noreferrer'
          >
            <Github className='inline w-4' /> Repository
          </a>
        </div>
      </motion.section>
    </>
  );
};

export function getStaticPaths() {
  return {
    paths: allProjects.map((project) => ({
      params: { slug: project.slug },
    })),
    fallback: false,
  };
}

export function getStaticProps({ params }: { params: { slug: string } }) {
  const project = allProjects.find(({ slug }) => slug === params.slug);

  return { props: { project } };
}

export default Project;
