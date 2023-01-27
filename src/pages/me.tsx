import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';

import { slideVariants } from '@/lib/motion';
import SectionTitle from '@/components/SectionTitle';

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
      className='mt-10'
    >
      <Image
        src='/img/avatar.webp'
        alt='Me'
        width={140}
        height={140}
        className='mx-auto rounded-full'
      />
    </motion.figure>

    <div className='mt-10 flex flex-col gap-6 self-start text-left'>
      <motion.section
        variants={slideVariants(0.6)}
        initial='hidden'
        animate='show'
      >
        <SectionTitle id='short-story'>
          💬 Short story about <span className='text-gradient'>me</span>
        </SectionTitle>
        <p className='mt-3'>
          Hello, my name is Abdul malik, and my internet name is up2dul. I am a
          20 y.o man from Jakarta, Indonesia. I have been interested and
          passionate in programming since 2019, precisely when I was in high
          school. What made me interested was when I saw the chatbot on the LINE
          application, and then I am exploring how to make it on the internet,
          in the end, I did it (even mine was a very simple chatbot). After
          that, I focus diving into web programming then.
        </p>
      </motion.section>

      <motion.section
        variants={slideVariants(0.8)}
        initial='hidden'
        animate='show'
      >
        <SectionTitle id='things-to-do'>
          🧩 What <span className='text-gradient'>things</span> I do now
        </SectionTitle>
        <p className='mt-3'>
          I am currently focusing on expanding my knowledge and skills in
          React.js, Next.js, Typescript, and related Frontend technologies by
          learning from official documentation, articles, videos on YouTube, as
          well as online courses. I also practice by creating and working on
          various projects and apps.
        </p>
      </motion.section>

      <motion.section
        variants={slideVariants(1)}
        initial='hidden'
        animate='show'
      >
        <SectionTitle id='fun-facts'>
          💡 Fun <span className='text-gradient'>facts</span>
        </SectionTitle>
        <p className='mt-3'>
          Apart from programming, one of the things I enjoy is reading books
          (even though I may not be as consistent with it currently). My reading
          preference mostly lies in novels, specifically those written by Tere
          Liye. These books by Tere Liye are truly fantastic and always leave me
          wanting to purchase more of his books.
        </p>
      </motion.section>
    </div>
  </>
);

export default Me;
