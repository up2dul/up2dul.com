import { Plus_Jakarta_Sans } from '@next/font/google';
import type { PropsWithChildren } from 'react';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });
type LayoutProps = PropsWithChildren;

const Layout = ({ children }: LayoutProps) => (
  <main className={jakarta.className}>{children}</main>
);

export default Layout;
