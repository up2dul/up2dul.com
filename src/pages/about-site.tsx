import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';

import { referencesList, techStackList } from '@/lib/misc';
import { slideVariants } from '@/lib/motion';
import SectionTitle from '@/components/SectionTitle';

const AboutSite = () => (
  <>
    <NextSeo
      title='About this website'
      openGraph={{
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/about-site`,
        title: 'About this website',
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/og?title=About this website`,
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
        🌐 About this <span className='text-gradient'>website</span>
      </h2>
      <p className='mt-3'>Just some additional informations about this site</p>
    </motion.section>

    <div className='mt-10 flex flex-col gap-6 self-start text-left'>
      <motion.section
        variants={slideVariants(0.4)}
        initial='hidden'
        animate='show'
      >
        <SectionTitle id='tech-stack'>
          ⚛️ <span className='text-gradient'>Tech</span> stack
        </SectionTitle>

        <p className='mt-1'>Some technologies that I used to built this site</p>

        <ul className='mt-3 list-disc'>
          {techStackList.map((tech) => (
            <li key={tech}>
              <p>{tech}</p>
            </li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        variants={slideVariants(0.6)}
        initial='hidden'
        animate='show'
      >
        <SectionTitle id='reason'>
          ❓ <span className='text-gradient'>Reasons</span> on making
        </SectionTitle>

        <p className='mt-1'>Why I built this site?</p>

        <ul className='mt-3 list-disc'>
          <li>
            <p>As implementation to learning of Next.js</p>
          </li>
          <li>
            <p>As implementation to learning of Contentlayer and MDX</p>
          </li>
          <li>
            <p>A place to showcase my portfolios</p>
          </li>
        </ul>
      </motion.section>

      <motion.section
        variants={slideVariants(0.8)}
        initial='hidden'
        animate='show'
      >
        <SectionTitle id='references'>
          🔖 Website <span className='text-gradient'>references</span>
        </SectionTitle>

        <p className='mt-1'>Here is some cool sites that inspired me</p>

        <ul className='mt-3 list-disc'>
          {referencesList.map((reference) => (
            <li key={reference}>
              <a
                href={`https://${reference}`}
                aria-label={`Link to ${reference}`}
                target='_blank'
                className='text-link cursor-newtab'
                rel='noreferrer'
              >
                {reference}
              </a>
            </li>
          ))}
        </ul>
      </motion.section>
    </div>
  </>
);

export default AboutSite;
