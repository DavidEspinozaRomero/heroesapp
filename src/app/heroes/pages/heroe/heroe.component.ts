import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/heroes.interfaces';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss'],
})
export class HeroeComponent implements OnInit {
  //#region variables
  hero!: Hero;
  //#endregion variables
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {}

  ngOnInit(): void {
    // this._activatedRoute.params.subscribe(({ id }) => {
    //   this.getHeroById(id);
    // });
    this._activatedRoute.params
      .pipe(switchMap(({ id }) => this._heroesService.getHeroeById(id)))
      .subscribe({
        next: (hero: Hero) => {
          this.hero = hero;
        },
        error: console.log,
        complete: console.log,
      });
  }

  getHeroById(heroId: any) {
    this._heroesService.getHeroeById(heroId).subscribe({
      next: (hero: Hero) => {
        this.hero = hero;
      },
      error: console.log,
      complete: console.log,
    });
  }
}
