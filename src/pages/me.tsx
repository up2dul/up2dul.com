import { motion } from 'framer-motion';

import { slideVariants } from '@/lib/motion';

const Me = () => (
  <>
    <motion.h2
      variants={slideVariants(0.2)}
      initial='hidden'
      whileInView='show'
    >
      👨‍💻 About <span className='text-gradient'>me</span>
    </motion.h2>
  </>
);

export default Me;
