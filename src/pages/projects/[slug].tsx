import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { allProjects, type Project } from 'contentlayer/generated';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, Globe } from 'lucide-react';

import { slideVariants } from '@/lib/motion';
import MDXComponents from '@/components/MDXComponents';
import Tag from '@/components/Tag';

const Project = ({ project }: { project: Project }) => {
  const MDXContent = useMDXComponent(project.body.code);
  const { slug, title, description, tags, link } = project;

  return (
    <>
      <NextSeo
        title={`${title} - Project`}
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
            src={`/static/images/projects/${slug}.webp`}
            alt={`${title} screenshot`}
            width={440}
            height={220}
            className='aspect-video rounded-lg'
          />
        </figure>

        <div className='flex flex-wrap justify-center gap-x-3 gap-y-2'>
          {tags?.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className='flex gap-10'>
          <a
            href={link?.demo}
            aria-label='Demo'
            target='_blank'
            className='text-link inline-flex cursor-newtab items-center gap-1'
            rel='noreferrer'
          >
            <Globe className='w-4' /> Demo
          </a>
          <a
            href={link?.repo}
            aria-label='Repository'
            target='_blank'
            className='text-link inline-flex cursor-newtab items-center gap-1'
            rel='noreferrer'
          >
            <Github className='inline w-4' /> Repository
          </a>
        </div>
      </motion.section>

      <motion.section
        variants={slideVariants(0.6)}
        initial='hidden'
        animate='show'
        className='mt-10 text-left'
      >
        <MDXContent components={MDXComponents} />
      </motion.section>

      <motion.div
        variants={slideVariants(0.8)}
        initial='hidden'
        animate='show'
        className='mt-16 -mb-5'
      >
        <Link
          href='/projects'
          className='text-link inline-flex items-center gap-1'
        >
          <ArrowLeft /> Back to projects
        </Link>
      </motion.div>
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
