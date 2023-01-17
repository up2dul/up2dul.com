import { Plus_Jakarta_Sans } from '@next/font/google';
import type { PropsWithChildren as LayoutProps } from 'react';

import Header from './Header';
import SkipToContent from '@/components/button/SkipToContent';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

const Layout = ({ children }: LayoutProps) => (
  <>
    <style jsx global>{`
      html {
        font-family: ${jakarta.style.fontFamily};
      }
    `}</style>

    <SkipToContent />

    <Header />

    <main id='main-content' className='mt-[100px] py-14 sm:mt-[64px]'>
      {children}
    </main>
  </>
);

export default Layout;
