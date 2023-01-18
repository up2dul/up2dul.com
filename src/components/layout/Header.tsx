import { cn, getCurrentTime } from '@/lib/utils';
import ThemeButton from '@/components/button/ThemeButton';
import NavMenu from '@/components/nav/NavMenu';

const currentTime = getCurrentTime();

const Header = () => (
  <header
    className={cn(
      'fixed top-0 z-10 flex w-full flex-col items-center justify-between gap-4 px-8 py-3 backdrop-blur-md',
      'sm:flex-row sm:px-20 sm:py-4 md:px-40 lg:px-56 xl:px-72',
    )}
  >
    <h4 className='font-semibold'>{currentTime} (UTC +07:00)</h4>

    <div className='flex w-full items-center justify-evenly gap-10 text-3xl sm:w-auto'>
      <ThemeButton />
      <NavMenu />
    </div>
  </header>
);

export default Header;
