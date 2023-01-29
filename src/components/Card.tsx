import Link from 'next/link';

import Tag from './Tag';

type CardProps = {
  href: string;
  order: string;
  title: string;
  description: string;
  tags?: string[];
};

const Card = ({ href, order, title, description, tags }: CardProps) => (
  <Link href={href} className='card'>
    <article className='flex h-full flex-col justify-between gap-5 rounded-lg bg-geyser-50 p-6 text-left dark:bg-bunker-900'>
      <div className='flex items-start gap-2'>
        <p className='font-bold'>{order}</p>
        <h3>{title}</h3>
      </div>

      <p>{description}</p>

      <div className='flex flex-wrap gap-x-3 gap-y-2'>
        {tags?.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </article>
  </Link>
);

export default Card;
