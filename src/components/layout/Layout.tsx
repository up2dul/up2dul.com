import { Plus_Jakarta_Sans } from '@next/font/google';
import type { PropsWithChildren as LayoutProps } from 'react';

import Header from './Header';
import SkipToContent from '@/components/button/SkipToContent';
import Footer from './Footer';

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

    <main className='flex min-h-screen flex-col justify-between pt-[100px] sm:pt-[64px]'>
      <section
        id='main-content'
        className='px-container my-auto py-14 text-center'
      >
        {children}
      </section>

      <Footer />
    </main>
  </>
);

export default Layout;
