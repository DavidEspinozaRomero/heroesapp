import { Component, OnInit } from "@angular/core";
import { Hero } from "../../interfaces/heroes.interfaces";

import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  // #region variables
  heroesList: Hero[];
  // #endregion variables
  constructor(private _heroesService: HeroesService) {}

  ngOnInit(): void {}
  //#region apis
  getHeroes() {
    this._heroesService.getHeroes().subscribe({
      next: (heroes) => {
        console.log(heroes);
        this.heroesList = heroes
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {},
    });
  }
  //#endregion apis
}
