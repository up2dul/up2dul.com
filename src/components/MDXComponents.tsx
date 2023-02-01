import SectionTitle from './SectionTitle';

const MDXComponents = {
  h3: ({ id, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <SectionTitle id={id as string} className='mt-6 mb-3' {...props} />
  ),
};

export default MDXComponents;
