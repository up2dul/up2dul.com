import { Plus_Jakarta_Sans } from '@next/font/google';
import type { PropsWithChildren } from 'react';

import Header from './Header';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });
type LayoutProps = PropsWithChildren;

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <main className={jakarta.className}>{children}</main>
  </>
);

export default Layout;
