import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Balancer from 'react-wrap-balancer';

import { notFoundSEO } from '@/lib/next-seo-config';

const NotFound = () => (
  <>
    <NextSeo {...notFoundSEO} />

    <h1>
      <Balancer>
        😵 <span className='text-gradient'>404</span> - Looks like you are lost
      </Balancer>
    </h1>

    <p className='my-4'>
      Maybe this page used to exist or you just spelled something wrong. I am
      guessing you spelled something wrong. Can you double check the URL?
    </p>

    <Link href='/' className='text-link'>
      Back to home
    </Link>
  </>
);

export default NotFound;
