import { motion } from 'framer-motion';

import { contactList } from '@/lib/misc';
import { slideVariants } from '@/lib/motion';
import { cn } from '@/lib/utils';
import MyTooltip from './MyTooltip';

const ContactList = () => (
  <motion.div
    variants={slideVariants(0.4)}
    initial='hidden'
    whileInView='show'
    className='mt-5 mb-7 flex justify-center gap-6 sm:gap-8 lg:gap-10'
  >
    {contactList.map(({ url, title, icon: Icon }) => (
      <MyTooltip key={url} content={title}>
        <a
          href={url}
          aria-label={title}
          className={cn(
            'cursor-newtab block p-1 transition-colors',
            'hover:text-blue-700 dark:hover:text-blue-400',
          )}
          target='_blank'
          rel='noreferrer'
        >
          <Icon />
        </a>
      </MyTooltip>
    ))}
  </motion.div>
);

export default ContactList;
