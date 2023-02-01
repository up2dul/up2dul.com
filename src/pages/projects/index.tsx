import { NextSeo } from 'next-seo';
import { allProjects, type Project } from 'contentlayer/generated';
import Balancer from 'react-wrap-balancer';
import { motion } from 'framer-motion';

import { selectField } from '@/lib/utils';
import { slideVariants } from '@/lib/motion';
import Card from '@/components/Card';

const Projects = ({
  projects,
}: {
  projects: Pick<Project, 'slug' | 'title' | 'description' | 'tags'>[];
}) => (
  <>
    <NextSeo
      title='Projects'
      description='My projects showcase'
      openGraph={{
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/projects`,
        title: 'Projects',
        description: 'My projects showcase',
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
      {projects.map((project, idx) => (
        <Card
          {...project}
          key={project.slug}
          href={`/projects/${project.slug}`}
          order={`0${++idx}`}
        />
      ))}
    </motion.section>
  </>
);

export function getStaticProps() {
  const projects = allProjects.map((project) =>
    selectField(project, ['slug', 'title', 'description', 'tags']),
  );

  return {
    props: {
      projects,
    },
  };
}

export default Projects;
