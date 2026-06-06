import { Component } from '@angular/core';
import { RedText } from './components/red-text/red-text';

@Component({
  selector: 'app-component-selector',
  imports: [RedText],
  templateUrl: './component-selector.html',
})
export class ComponentSelector {}
