import { cn } from '@/lib/utils';

const Footer = () => (
  <footer className={cn('py-6 px-8 text-center', 'sm:px-10 md:px-14 lg:px-20')}>
    <div className={cn('my-6 flex justify-between', 'sm:my-4 md:my-0')}>
      <p>Design & Code with 💙</p>
      <p>
        Code on{' '}
        <a
          href='https://github.com/up2dul/up2dul.com'
          aria-label='Source code'
          target='_blank'
          className='text-link cursor-newtab'
          rel='noreferrer'
        >
          Github
        </a>
      </p>
    </div>

    <p className='opacity-80'>© Abdul Malik 2023</p>
  </footer>
);

export default Footer;
