import type { PropsWithChildren } from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

type NavLinkProps = PropsWithChildren<{
  to: string;
  isActive: boolean;
}>;

const NavLink = ({ to, isActive, children }: NavLinkProps) => (
  <li className={cn('text-2xl font-medium', isActive && 'text-gradient')}>
    {isActive ? (
      <span className='py-1 px-4'>{children}</span>
    ) : (
      <Link
        href={to}
        className={cn(
          'py-1 px-4',
          'decoration-blue-600 decoration-4 transition-colors',
          'hover:text-blue-600 hover:underline',
        )}
      >
        {children}
      </Link>
    )}
  </li>
);

export default NavLink;
