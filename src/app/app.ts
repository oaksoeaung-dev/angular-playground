import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { PanelMenuModule } from 'primeng/panelmenu';
import { Menu } from './shared/components/menu/menu';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  imports: [ButtonModule, AccordionModule, PanelMenuModule, Menu, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
