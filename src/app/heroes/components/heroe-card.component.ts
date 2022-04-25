import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../interfaces/heroes.interfaces';

@Component({
    selector: 'app-heroe-card',
    templateUrl: 'heroe-card.component.html'
})

export class HeroeCardComponent implements OnInit {
    @Input() heroe: Hero;

    constructor() { }

    ngOnInit() { }
}