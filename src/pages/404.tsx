import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { NextSeo } from 'next-seo';
import { NOT_FOUND_SEO } from 'next-seo.config';
import Balancer from 'react-wrap-balancer';

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

    <Link href='/' className='text-link inline-flex items-center gap-1'>
      <ArrowLeft />
      Back to home
    </Link>
  </>
);

export default NotFound;
