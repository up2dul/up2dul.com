import { Facebook, FileText, Github, Linkedin, Mail, Send } from 'lucide-react';
import type { Contact, NavMenu } from './types';

const navMenuList: NavMenu[] = [
  {
    href: '/',
    content: 'Home',
  },
  {
    href: '/posts',
    content: 'Posts',
  },
  {
    href: '/projects',
    content: 'Projects',
  },
  {
    href: '/me',
    content: 'About me',
  },
  {
    href: '/about-site',
    content: 'About site',
  },
];

const contactList: Contact[] = [
  {
    title: 'Email <up2dul@gmail.com>',
    url: 'mailto:up2dul@gmail.com',
    icon: Mail,
  },
  {
    title: 'GitHub',
    url: 'https://github.com/up2dul',
    icon: Github,
  },
  {
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/abdulmalikk',
    icon: Linkedin,
  },
  {
    title: 'Telegram',
    url: 'https://t.me/up2dul',
    icon: Send,
  },
  {
    title: 'Facebook',
    url: 'https://facebook.com/up2dul',
    icon: Facebook,
  },
  {
    title: 'Resume',
    url: 'https://tinyurl.com/up2dul-resume',
    icon: FileText,
  },
];

export { navMenuList, contactList };
