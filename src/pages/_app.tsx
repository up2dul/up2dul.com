import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-wrap-balancer';
import type { AppType } from 'next/app';

import Layout from '@/components/layout/Layout';
import '@/styles/globals.css';

const MyApp: AppType = ({ Component, pageProps }) => (
  <ThemeProvider defaultTheme='dark'>
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  </ThemeProvider>
);

export default MyApp;
