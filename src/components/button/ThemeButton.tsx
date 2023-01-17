import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

import { cn } from '@/lib/utils';

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = (): void => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <button
      className={cn(
        'rounded-md p-1 transition-colors',
        'hover:bg-bunker-100 dark:hover:bg-geyser-900',
      )}
      onClick={handleToggleTheme}
    >
      {theme === 'light' ? <Moon /> : <Sun />}
    </button>
  );
};

export default ThemeButton;
