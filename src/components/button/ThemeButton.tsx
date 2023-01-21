import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

import { cn } from '@/lib/utils';
import MyTooltip from '@/components/MyTooltip';

const ThemeButton = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleToggleTheme = (): void => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <MyTooltip
      content={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      <button
        aria-label='Theme button'
        className={cn(
          'rounded-md py-2 px-3 transition-colors',
          'hover:bg-bunker-100 dark:hover:bg-geyser-900',
        )}
        onClick={handleToggleTheme}
      >
        {theme === 'light' ? <Moon /> : <Sun />}
      </button>
    </MyTooltip>
  );
};

export default ThemeButton;
