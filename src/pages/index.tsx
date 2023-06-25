import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import Balancer from 'react-wrap-balancer';

import { slideVariants } from '@/lib/motion';
import ContactList from '@/components/ContactList';

const S = ({ children }: { children: string }) => <strong>{children}</strong>;

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
        A self-taught <S>Frontend Developer</S> who is currently focusing and
        diving into the world of <S>React.js, Next.js</S>, and other related
        technologies.
      </Balancer>
    </motion.p>
  </>
);

export default Home;
