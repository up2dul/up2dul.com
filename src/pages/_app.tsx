import type { AppType } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes';
import { Provider as BalancerProvider } from 'react-wrap-balancer';

import Layout from '@/components/layout/Layout';

import '@/styles/globals.css';

const MyApp: AppType = ({ Component, pageProps }) => (
  <ThemeProvider defaultTheme='dark'>
    <BalancerProvider>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </BalancerProvider>
  </ThemeProvider>
);

export default MyApp;
