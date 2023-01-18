import Link from 'next/link';
import type { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

type NavLinkProps = PropsWithChildren<{
  to: string;
  isActive: boolean;
}>;

const NavLink = ({ to, isActive, children }: NavLinkProps) => (
  <li
    className={cn(
      'text-2xl font-semibold',
      isActive
        ? 'text-gradient py-1 px-4'
        : 'decoration-blue-600 decoration-4 transition-colors hover:text-blue-600 hover:underline',
    )}
  >
    {isActive ? (
      children
    ) : (
      <Link href={to} className='py-1 px-4'>
        {children}
      </Link>
    )}
  </li>
);

export default NavLink;
