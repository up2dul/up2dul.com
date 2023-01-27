import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';

import { slideVariants } from '@/lib/motion';

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

    <motion.h2 variants={slideVariants(0.2)} initial='hidden' animate='show'>
      🌐 About this <span className='text-gradient'>website</span>
    </motion.h2>
  </>
);

export default AboutSite;
