import { Component } from '@angular/core';

@Component({
  selector: 'p[redText]',
  imports: [],
  templateUrl: './red-text.html',
  host: { class: 'text-red-400' },
})
export class RedText {}
