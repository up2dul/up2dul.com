import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Balancer from 'react-wrap-balancer';

import { NOT_FOUND_SEO } from 'next-seo.config';

const NotFound = () => (
  <>
    <NextSeo {...NOT_FOUND_SEO} />

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
