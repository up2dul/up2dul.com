import { cn } from '@/lib/utils';
import { contactList } from '@/lib/misc';
import MyTooltip from './MyTooltip';

const ContactList = () => (
  <div className='mt-5 mb-7 flex justify-center gap-6 sm:gap-8 lg:gap-10'>
    {contactList.map((contact) => (
      <MyTooltip key={contact.url} content={contact.title}>
        <a
          href={contact.url}
          className={cn(
            'block cursor-alias p-1 transition-colors',
            'hover:text-blue-700 dark:hover:text-blue-400',
          )}
          target='_blank'
          rel='noreferrer'
        >
          <contact.icon />
        </a>
      </MyTooltip>
    ))}
  </div>
);

export default ContactList;
