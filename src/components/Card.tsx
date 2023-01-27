import Link from 'next/link';

import Tag from './Tag';

type CardProps = {
  href: string;
  order: string;
  title: string;
  description: string;
  categories?: string[];
};

const Card = ({ href, order, title, description }: CardProps) => (
  <Link href={href} className='card'>
    <article className='flex h-full flex-col justify-between gap-5 rounded-lg bg-geyser-50 p-6 text-left dark:bg-bunker-900'>
      <div className='flex items-start gap-2'>
        <p className='font-bold'>{order}</p>
        <h3>{title}</h3>
      </div>

      <p>{description}</p>

      <div className='flex flex-wrap gap-x-3 gap-y-2'>
        <Tag>React</Tag>
        <Tag>Typescript</Tag>
      </div>
    </article>
  </Link>
);

export default Card;
