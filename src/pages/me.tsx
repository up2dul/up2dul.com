import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';

import { slideVariants } from '@/lib/motion';
import { cn } from '@/lib/utils';
import SectionTitle from '@/components/SectionTitle';

const S = ({ children }: { children: string }) => <strong>{children}</strong>;

const Me = () => (
  <>
    <NextSeo
      title='About me'
      openGraph={{
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/me`,
        title: 'About me',
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/og?title=About me`,
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
        👨‍💻 About <span className='text-gradient'>me</span>
      </h2>
      <p className='mt-3'>More about me here</p>
    </motion.section>

    <motion.figure
      variants={slideVariants(0.4)}
      initial='hidden'
      animate='show'
      className={cn(
        'mt-10 inline-block rounded-full p-1',
        'bg-gradient-to-br from-blue-500 to-blue-900',
      )}
    >
      <Image
        src='/static/images/avatar.webp'
        alt='My photo at the beach'
        width={140}
        height={140}
        className='rounded-full'
      />
    </motion.figure>

    <div className='mt-10 flex flex-col gap-6 self-start text-left'>
      <motion.section
        variants={slideVariants(0.6)}
        initial='hidden'
        animate='show'
      >
        <SectionTitle id='short-story'>
          💬 Short <span className='text-gradient'>story</span> about me
        </SectionTitle>
        <p className='mt-3'>
          Hello, my name is <S>Abdul malik</S>, and my internet name is{' '}
          <S>up2dul</S>. I am a 20 y.o man from Jakarta, Indonesia. I have been
          interested and passionate in programming since 2019, precisely when I
          was in high school. What made me interested was when I saw the chatbot
          on the LINE application, and then I am exploring how to make it on the
          internet, in the end, I did it (even mine was a very simple chatbot).
          After that, I focus diving into <S>web programming</S> then.
        </p>
      </motion.section>

      <motion.section
        variants={slideVariants(0.8)}
        initial='hidden'
        animate='show'
      >
        <SectionTitle id='post-graduated'>
          🎓 Post <span className='text-gradient'>graduated</span>
        </SectionTitle>
        <p className='mt-3'>
          After graduated from high school in 2020, I got a job to make a{' '}
          <S>company profile website</S> for a company at near of my home. I
          built the website using MongoDB as the database, and Next.js v.9 with
          Static Site Generation strategy for a better SEO. I built the website
          for about 2 months (August 2020 - October 2020).
          <br />
          After completing the website, I remained employed at that company but
          in a role outside of programming. At first, I balanced work with
          learning programming at home, but eventually, the demands of work
          consumed all my time, causing me to lose focus on my learning. In
          2022, I attempted to return to focus on learning programming, until I
          resigned in October 2022 to prioritize my learning.
          <br />I am currently focusing on expanding my knowledge and skills in
          <S> React.js, Next.js, TypeScript,</S> and related Frontend
          technologies by learning from official documentation, articles, videos
          on YouTube, and online courses as well. I also practice by creating on
          various{' '}
          <Link href='/projects' className='text-link'>
            projects or apps
          </Link>
          .
        </p>
      </motion.section>

      <motion.section
        variants={slideVariants(1)}
        initial='hidden'
        animate='show'
      >
        <SectionTitle id='fun-fact'>
          💡 Fun <span className='text-gradient'>facts</span>
        </SectionTitle>
        <ul className='mt-3 list-disc'>
          <li>
            <p>
              Apart from programming, one of the things I enjoy is reading books
              (even though I may be inconsistent with it currently).
            </p>
          </li>
          <li>
            <p>
              I just started writing blog. Check this out{' '}
              <a
                href='https://blog.up2dul.com'
                aria-label='Blog'
                target='_blank'
                className='text-link cursor-newtab'
                rel='noreferrer'
              >
                here
              </a>
              .
            </p>
          </li>
        </ul>
      </motion.section>
    </div>
  </>
);

export default Me;
