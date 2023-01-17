import { Equal } from 'lucide-react';

import { cn } from '@/lib/utils';
import ThemeButton from '@/components/button/ThemeButton';

const Header = () => (
  <header
    className={cn(
      'fixed top-0 z-10 flex w-full flex-col items-center justify-between gap-4 px-8 py-3 backdrop-blur-md',
      'sm:flex-row sm:px-20 sm:py-4 md:px-40 lg:px-56 xl:px-72',
    )}
  >
    <h4>up2dul</h4>

    <div className='flex w-full items-center justify-evenly gap-14 text-3xl sm:w-auto'>
      <ThemeButton />
      <button
        className={cn(
          'rounded-md transition-colors',
          'hover:bg-bunker-100 dark:hover:bg-geyser-900',
        )}
      >
        <Equal size={32} />
      </button>
    </div>
  </header>
);

export default Header;
