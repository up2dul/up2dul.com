import Balancer from 'react-wrap-balancer';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';

import ContactList from '@/components/ContactList';
import { slideVariants } from '@/lib/motion';

const Home: NextPage = () => (
  <>
    <motion.h1
      variants={slideVariants(0.2)}
      initial='hidden'
      whileInView='show'
    >
      👋 Hi there, <br />
      I&apos;m <span className='text-gradient'>Abdul Malik</span>!
    </motion.h1>

    <ContactList />

    <motion.p variants={slideVariants(0.6)} initial='hidden' whileInView='show'>
      <Balancer>
        A self-taught developer who is currently focusing and diving into the
        world of <strong>Frontend</strong> web development with{' '}
        <strong>React.js, Next.js</strong>, and other related technologies.
      </Balancer>
    </motion.p>
  </>
);

export default Home;
