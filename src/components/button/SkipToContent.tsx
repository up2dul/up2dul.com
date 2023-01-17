import { cn } from '@/lib/utils';

const SkipToContent = () => (
  <a
    href='#main-content'
    className={cn(
      'absolute -top-10 left-10 z-20 -translate-y-12 rounded-md bg-bunker-50 p-1',
      'transform transition-transform duration-200',
      'focus:top-8 focus:translate-y-3',
      'dark:bg-bunker-900',
    )}
  >
    Skip to content
  </a>
);

export default SkipToContent;
