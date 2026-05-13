import { LucideHouseHeart, LucideLibraryBig } from '@lucide/angular';
import { MenuNode } from '../../shared/components/menu/interfaces/MenuNode';

export const MENUS: MenuNode[] = [
  {
    label: 'Home',
    lucideIcon: LucideHouseHeart,
    iconColor: 'indigo',
    routerLink: '',
  },
  {
    label: 'Learn',
    lucideIcon: LucideLibraryBig,
    iconColor: 'sky',
  },
];
