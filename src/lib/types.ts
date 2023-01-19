import type { Icon } from 'lucide-react';

type NavMenu = {
  href: string;
  content: string;
};

type Contact = {
  title: string;
  url: string;
  icon: Icon;
};

export type { NavMenu, Contact };
