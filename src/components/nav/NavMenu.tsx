import { useRouter } from 'next/router';
import * as Dialog from '@radix-ui/react-dialog';
import { Equal } from 'lucide-react';

import { cn } from '@/lib/utils';
import { navMenuList } from '@/lib/misc';
import NavLink from './NavLink';

const NavMenu = () => {
  const { pathname } = useRouter();

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
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
          <Dialog.Content className='rounded-md bg-geyser-100 py-5 px-8 outline-none dark:bg-bunker-800'>
            <ul className='flex flex-col gap-5'>
              {navMenuList.map(({ href, content }) => (
                <NavLink key={href} to={href} isActive={pathname === href}>
                  {content}
                </NavLink>
              ))}
            </ul>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default NavMenu;