import { Component, Input } from '@angular/core';
import { Hero } from '../interfaces/heroes.interfaces';

@Component({
    selector: 'app-heroe-card',
    templateUrl: 'heroe-card.component.html'
    
})

export class HeroeCardComponent {
    @Input() heroe!: Hero;

}