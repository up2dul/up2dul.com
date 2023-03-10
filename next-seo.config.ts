import type { DefaultSeoProps } from 'next-seo';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

const SEO: DefaultSeoProps = {
  titleTemplate: '%s | Abdul Malik',
  defaultTitle: 'Abdul Malik',
  description: 'Self-taught Frontend developer based in Indonesia',
  themeColor: '#0070f3',
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'mask-icon',
      href: 'safari-pinned-tab.svg',
      color: '#1ea8ff',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
  openGraph: {
    url: SITE_URL,
    siteName: 'Abdul Malik',
    title: 'Abdul Malik',
    description: 'Self-taught Frontend developer based in Indonesia',
    images: [
      {
        url: `${SITE_URL}/api/og`,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
      },
    ],
    type: 'website',
  },
};

const NOT_FOUND_SEO: DefaultSeoProps = {
  ...SEO,
  title: 'Page not found',
  description: 'Error 404 - This page could not be found',
  openGraph: {
    type: 'website',
    title: 'Page not found',
    description: 'Error 404 - This page could not be found',
    images: [
      {
        url: `${SITE_URL}/api/og?title=Error 404 - page not found`,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
      },
    ],
  },
};

export { SEO, NOT_FOUND_SEO };
