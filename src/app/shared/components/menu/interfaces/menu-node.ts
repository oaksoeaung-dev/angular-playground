import { MenuItem } from 'primeng/api';
import { LucideIconInput } from '@lucide/angular';

export interface MenuNode extends MenuItem {
  lucideIcon?: LucideIconInput;
  iconColor?: string;
  items?: MenuNode[];
}
