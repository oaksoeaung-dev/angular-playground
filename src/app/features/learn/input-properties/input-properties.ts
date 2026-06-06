import { Component } from '@angular/core';
import { NameCard } from './components/name-card/name-card';
import { Header } from '../../../shared/components/header/header';

@Component({
  selector: 'app-input-properties',
  imports: [NameCard, Header],
  templateUrl: './input-properties.html',
})
export class InputProperties {}
