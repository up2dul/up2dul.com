import { ThemeProvider } from 'next-themes';
import type { AppType } from 'next/app';

import Layout from '@/components/layout/Layout';
import '@/styles/globals.css';

const MyApp: AppType = ({ Component, pageProps }) => (
  <ThemeProvider defaultTheme='dark'>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
);

export default MyApp;
