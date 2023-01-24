import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as Dialog from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';
import { Equal } from 'lucide-react';

import { cn } from '@/lib/utils';
import { navMenuList } from '@/lib/misc';
import { navMenuVariants } from '@/lib/motion';
import NavLink from './NavLink';

const NavMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { pathname } = useRouter();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          aria-label='Nav menu button'
          className={cn(
            'rounded-md py-1 px-2 transition-colors',
            'hover:bg-bunker-100 dark:hover:bg-geyser-900',
          )}
        >
          <Equal size={32} />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 z-20 flex items-center justify-center backdrop-blur-sm'>
          <motion.div
            variants={navMenuVariants}
            initial='hidden'
            animate='show'
          >
            <Dialog.Content
              className={cn(
                'rounded-md border-2 border-bunker-800 bg-geyser-50 px-8 pt-5 pb-6 outline-none',
                'dark:border-geyser-100 dark:bg-bunker-900',
              )}
            >
              <ul className='flex flex-col gap-5'>
                {navMenuList.map(({ href, content }) => (
                  <NavLink key={href} to={href} isActive={pathname === href}>
                    {content}
                  </NavLink>
                ))}
              </ul>
            </Dialog.Content>
          </motion.div>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default NavMenu;
