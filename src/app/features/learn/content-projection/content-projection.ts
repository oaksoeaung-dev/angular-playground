import { Component } from '@angular/core';
import { BlueBox } from './components/blue-box/blue-box';
import { Header } from '../../../shared/components/header/header';
import { RedBox } from './components/red-box/red-box';

@Component({
  selector: 'app-content-projection',
  imports: [BlueBox, Header, RedBox],
  templateUrl: './content-projection.html',
})
export class ContentProjection {}
