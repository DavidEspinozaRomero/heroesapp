import { Component, Input } from '@angular/core';
import { Hero } from '../interfaces/heroes.interfaces';

@Component({
  selector: 'app-heroe-card',
  templateUrl: 'heroe-card.component.html',
  styles: [
    `
      mat-card {
        margin-top: 1.5rem;
      }
    `,
  ],
})
export class HeroeCardComponent {
  @Input() heroe!: Hero;
}
