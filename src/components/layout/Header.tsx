import { cn, getCurrentTime } from '@/lib/utils';
import ThemeButton from '@/components/button/ThemeButton';
import NavMenu from '@/components/nav/NavMenu';

const currentTime = getCurrentTime();

const Header = () => (
  <header
    className={cn(
      'main-container fixed top-0 z-10 w-full py-3 backdrop-blur-md',
      'flex flex-col items-center justify-between gap-4',
      'sm:flex-row',
    )}
  >
    <h4 className='font-medium'>{currentTime} (UTC +07:00)</h4>

    <div className='flex w-full items-center justify-evenly gap-10 text-3xl sm:w-auto'>
      <ThemeButton />
      <NavMenu />
    </div>
  </header>
);

export default Header;
