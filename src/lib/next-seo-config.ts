import type { DefaultSeoProps } from 'next-seo';

const SEO: DefaultSeoProps = {
  titleTemplate: "%s | Abdul Malik's site",
  defaultTitle: 'Abdul Malik',
  description:
    'My personal website, a website where I showcase some my projects, skills, contacts, etc.',
  themeColor: '#0070f3',
  openGraph: {
    type: 'website',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: 'Abdul Malik',
    description:
      'My personal website, a website where I showcase some my projects, skills, contacts, etc.',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/og`,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
      },
    ],
  },
};

const notFoundSEO: DefaultSeoProps = {
  ...SEO,
  title: 'Page not found',
  description: 'Error 404 - This page could not be found',
  openGraph: {
    type: 'website',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: 'Page not found',
    description: 'Error 404 - This page could not be found',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/og?title=Error 404 - page not found`,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
      },
    ],
  },
};

export { SEO, notFoundSEO };
