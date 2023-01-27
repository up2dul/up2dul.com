import type { PropsWithChildren as TagProps } from 'react';

const Tag = ({ children }: TagProps) => (
  <h5 className='bg-blue-400 py-0.5 px-2 tracking-wide dark:bg-blue-900'>
    {children}
  </h5>
);

export default Tag;
