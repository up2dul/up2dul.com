import type { PropsWithChildren as LayoutProps } from 'react';
import { NextSeo } from 'next-seo';
import { SEO } from 'next-seo.config';

import satoshi from '@/lib/satoshi';
import SkipToContent from '@/components/button/SkipToContent';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: LayoutProps) => (
  <>
    <style jsx global>{`
      html {
        font-family: ${satoshi.style.fontFamily};
      }
    `}</style>

    <NextSeo {...SEO} />

    <SkipToContent />

    <Header />

    <main className='flex min-h-screen flex-col justify-between gap-6 pt-[114px] sm:pt-[78px]'>
      <section id='main-content' className='main-container my-auto text-center'>
        {children}
      </section>

      <Footer />
    </main>
  </>
);

export default Layout;
