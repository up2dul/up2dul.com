import { Html, Head, Main, NextScript } from 'next/document';

import { cn } from '@/lib/utils';

const Document = () => (
  <Html lang='en' className='scroll-smooth'>
    <Head />
    <body
      className={cn(
        'bg-geyser-50 text-bunker-900 transition-colors',
        'dark:bg-bunker-900 dark:text-geyser-50',
      )}
    >
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
