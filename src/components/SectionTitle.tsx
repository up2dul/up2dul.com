import { Hash } from 'lucide-react';
import type { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

type SectionTitle = PropsWithChildren<{
  id: string;
}>;

const SectionTitle = ({ id, children }: SectionTitle) => (
  <h3 id={id}>
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
