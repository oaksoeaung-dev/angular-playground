import { LucideChevronsLeftRightEllipsis, LucideHouseHeart, LucideLibraryBig, LucideLifeBuoy, LucideMousePointerClick, LucidePresentation } from '@lucide/angular';
import { MenuNode } from '../../shared/components/menu/interfaces/menu-node';

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
    items: [
      {
        label: 'input Properties',
        lucideIcon: LucideChevronsLeftRightEllipsis,
        iconColor: 'sky',
        routerLink: 'learn/input-properties',
      },
      {
        label: 'Content Projection',
        lucideIcon: LucidePresentation,
        iconColor: 'sky',
        routerLink: 'learn/content-projection',
      },
      {
        label: 'Component Selector',
        lucideIcon: LucideMousePointerClick,
        iconColor: 'sky',
        routerLink: 'learn/component-selector',
      },
      {
        label: 'Lifecycle',
        lucideIcon: LucideLifeBuoy,
        iconColor: 'sky',
        routerLink: 'learn/lifecycle',
      },
    ],
  },
];
