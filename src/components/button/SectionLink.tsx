import { Link } from 'lucide-react';

import { cn } from '@/lib/utils';

const SectionLink = ({ href }: { href: string }) => (
  <a
    href={href}
    className={cn(
      'absolute -ml-8',
      'opacity-0 transition-opacity',
      'hover:opacity-100 focus:opacity-100',
    )}
  >
    <Link className='m-0 inline p-0 text-blue-600' />
  </a>
);

export default SectionLink;
