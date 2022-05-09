import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Hero, Publisher } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

//#region interfaces
interface Publishers {
  id: string;
  desc: string;
}
//#endregion interfaces

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  //#region variables
  publishers: Publishers[] = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];
  // todo: add formbuilder
  hero: Hero = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };
  //#endregion variables
  constructor(
    private _heroesService: HeroesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params
      .pipe(switchMap(({ id }) => this._heroesService.getHeroeById(id)))
      .subscribe((hero) => (this.hero = hero));
  }

  //#region apis
  save() {
    if (this.hero.superhero.trim().length === 0) {
      return;
    }
    if (this.hero.id) {
      this._heroesService.updateHero(this.hero).subscribe({
        next: console.log,
        error: console.log,
        complete: console.log,
      });
    } else {
      this._heroesService.addHero(this.hero).subscribe({
        next: (hero) => {
          console.log(hero);

          this._router.navigate(['heroes/editar', hero.id]);
        },
        error: console.log,
        complete: console.log,
      });
    }
  }
  //#endregion apis
}
