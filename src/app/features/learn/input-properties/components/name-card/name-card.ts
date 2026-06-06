import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import randomInt from '../../../../../utiles/random-int';

@Component({
  selector: 'app-name-card',
  imports: [NgOptimizedImage],
  templateUrl: './name-card.html',
})
export class NameCard {
  fullName = input.required({ transform: (value: string) => value.toUpperCase() });
  image = input('', { transform: imagePath, alias: 'imagePath' });
  ngOnInit() {
    console.log('OK');
  }
}

function imagePath(value: string | undefined = 'face'): string {
  return `${value}s/${value}-${randomInt(1, 3)}.png`;
}
