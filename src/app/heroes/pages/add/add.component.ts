import { Component, OnInit } from '@angular/core';
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
  constructor(private _heroesService: HeroesService) {}

  ngOnInit(): void {}

  //#region apis
  save() {
    this._heroesService.addHero(this.hero).subscribe({
      next: console.log,
      error: console.log,
      complete: console.log,
    });
  }
  //#endregion apis
}
