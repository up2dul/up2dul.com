import localFont from '@next/font/local';
import { NextSeo } from 'next-seo';
import type { PropsWithChildren as LayoutProps } from 'react';

import { SEO } from '@/lib/next-seo-config';
import SkipToContent from '@/components/button/SkipToContent';
import Header from './Header';
import Footer from './Footer';

const satoshi = localFont({
  src: [
    {
      path: '../../assets/fonts/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

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

    <main className='flex min-h-screen flex-col justify-between gap-10 pt-[100px] sm:pt-[64px]'>
      <section
        id='main-content'
        className='main-container my-auto pt-10 text-center'
      >
        {children}
      </section>

      <Footer />
    </main>
  </>
);

export default Layout;
