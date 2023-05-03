import {
  Edit3,
  Facebook,
  FileText,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';
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
    title: 'Facebook',
    url: 'https://facebook.com/up2dul',
    icon: Facebook,
  },
  {
    title: 'Blog',
    url: 'https://blog.up2dul.com',
    icon: Edit3,
  },
  {
    title: 'Resume',
    url: 'https://tinyurl.com/up2dul-resume',
    icon: FileText,
  },
];

const techStackList = [
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Radix UI',
  'Contentlayer',
  'etc',
];

const referencesList = [
  'elianiva.my.id',
  'honghong.me',
  'rizkicitra.dev',
  'sreetamdas.com',
  'tfkhdyt.my.id',
  'theodorusclarence.com',
  'yehezgun.com',
  'zhenghao.io',
];

export { navMenuList, contactList, techStackList, referencesList };
