import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';

import { slideVariants } from '@/lib/motion';

const Me = () => (
  <section className='flex flex-col items-center gap-10'>
    <NextSeo
      title='About me'
      openGraph={{
        url: process.env.NEXT_PUBLIC_SITE_URL,
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

    <motion.h2 variants={slideVariants(0.2)} initial='hidden' animate='show'>
      👨‍💻 About <span className='text-gradient'>me</span>
    </motion.h2>

    <motion.div variants={slideVariants(0.4)} initial='hidden' animate='show'>
      <Image
        src='/img/avatar.webp'
        alt='Me'
        width={140}
        height={140}
        className='rounded-full'
      />
    </motion.div>

    <div className='flex flex-col gap-6 self-start text-left'>
      <motion.article
        variants={slideVariants(0.6)}
        initial='hidden'
        animate='show'
      >
        <h3>
          💬 Short story about <span className='text-gradient'>me</span>
        </h3>
        <p className='mt-3'>
          Hello, my name is Abdul malik, and my internet name is up2dul. I am a
          20 y.o man from Jakarta, Indonesia. I ave been interested and
          passionate in programming since 2019, precisely when I was in high
          school. What made me interested was when I saw the chatbot on the LINE
          application, and then I am exploring how to make it on the internet,
          in the end, I did it (even mine was a very simple chatbot). After
          that, I focus diving into web programming then.
        </p>
      </motion.article>

      <motion.article
        variants={slideVariants(0.8)}
        initial='hidden'
        animate='show'
      >
        <h3>
          🧩 What <span className='text-gradient'>things</span> I do now
        </h3>
        <p className='mt-3'>
          I am currently focusing on expanding my knowledge and skills in
          React.js, Next.js, Typescript, and related Frontend technologies by
          learning from official documentation, articles, videos on YouTube, as
          well as online courses. I also practice by creating and working on
          various projects and apps.
        </p>
      </motion.article>

      <motion.article
        variants={slideVariants(1)}
        initial='hidden'
        animate='show'
      >
        <h3>
          💡 Fun <span className='text-gradient'>facts</span>
        </h3>
        <p className='mt-3'>
          Apart from programming, one of the things I enjoy is reading books
          (even though I may not be as consistent with it currently). My reading
          preference mostly lies in novels, specifically those written by Tere
          Liye. These books by Tere Liye are truly fantastic and always leave me
          wanting to purchase more of his books.
        </p>
      </motion.article>
    </div>
  </section>
);

export default Me;
