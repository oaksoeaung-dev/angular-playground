import { Component, inject, signal } from '@angular/core';
import { LucideChevronRight, LucideDynamicIcon } from '@lucide/angular';
import { PanelMenu, PanelMenuModule, PanelMenuPassThroughOptions } from 'primeng/panelmenu';
import { Ripple } from 'primeng/ripple';
import { MENUS } from '../../../core/data/menus';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { MenuNode } from './interfaces/MenuNode';
import { filter } from 'rxjs';

@Component({
  selector: 'app-menu',
  imports: [PanelMenuModule, Ripple, LucideDynamicIcon, LucideChevronRight, RouterModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  private router = inject(Router);

  protected menus = signal<MenuNode[]>(MENUS);
  protected menuStyle: PanelMenuPassThroughOptions<PanelMenu> = {
    root: 'gap-0',
    panel: 'border-0 p-0',
    header: 'text-sm rounded-lg overflow-hidden',
    item: 'text-sm rounded-lg overflow-hidden',
  };

  protected getIconClasses(iconColor?: string): { wrapper: string; stroke: string } {
    const colorMap: Record<string, { wrapper: string; stroke: string }> = {
      blue: { wrapper: 'ring-blue-200 bg-blue-100', stroke: 'stroke-blue-500' },
      red: { wrapper: 'ring-red-200 bg-red-100', stroke: 'stroke-red-500' },
      green: { wrapper: 'ring-green-200 bg-green-100', stroke: 'stroke-green-500' },
      purple: { wrapper: 'ring-purple-200 bg-purple-100', stroke: 'stroke-purple-500' },
      amber: { wrapper: 'ring-amber-200 bg-amber-100', stroke: 'stroke-amber-500' },
      rose: { wrapper: 'ring-rose-200 bg-rose-100', stroke: 'stroke-rose-500' },
      sky: { wrapper: 'ring-sky-200 bg-sky-100', stroke: 'stroke-sky-500' },
      indigo: { wrapper: 'ring-indigo-200 bg-indigo-100', stroke: 'stroke-indigo-500' },
    };

    return (
      colorMap[iconColor ?? ''] ?? {
        wrapper: 'ring-transparent bg-transparent',
        stroke: 'stroke-transparent',
      }
    );
  }

  ngOnInit() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.expandActiveParent();
    });

    this.expandActiveParent();
  }

  expandActiveParent() {
    this.menus.set(this.updateExpandedState(this.menus()));
  }

  private hasActiveChild(node: MenuNode): boolean {
    const currentUrl = this.router.url;
    if (node.routerLink && currentUrl.startsWith('/' + node.routerLink)) {
      return true;
    }
    return node.items?.some((child) => this.hasActiveChild(child)) ?? false;
  }

  private updateExpandedState(nodes: MenuNode[]): MenuNode[] {
    return nodes.map((node) => ({
      ...node,
      expanded: this.hasActiveChild(node),
      items: node.items ? this.updateExpandedState(node.items) : undefined,
    }));
  }
}
