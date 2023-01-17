import { Plus_Jakarta_Sans } from '@next/font/google';
import type { PropsWithChildren as LayoutProps } from 'react';

import { cn } from '@/lib/utils';
import Header from './Header';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

const Layout = ({ children }: LayoutProps) => (
  <main className={cn(jakarta.className, 'pt-[97px] sm:pt-[62px]')}>
    <Header />
    {children}
  </main>
);

export default Layout;
