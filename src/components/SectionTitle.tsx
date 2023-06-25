import type { PropsWithChildren } from 'react';
import { Hash } from 'lucide-react';

import { cn } from '@/lib/utils';

type SectionTitle = PropsWithChildren<{
  id: string;
  className?: string;
}>;

const SectionTitle = ({ id, className, children }: SectionTitle) => (
  <h3 id={id} className={className}>
    <a href={'#' + id} className='section-title'>
      <Hash
        className={cn(
          'absolute m-0 mt-2 -ml-8 inline p-0',
          'text-blue-600 opacity-0 transition-opacity',
        )}
      />
      {children}
    </a>
  </h3>
);

export default SectionTitle;
