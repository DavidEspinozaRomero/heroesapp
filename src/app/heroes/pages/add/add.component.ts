import { Component, OnInit } from "@angular/core";
import { Hero } from "../interfaces/heroes.interfaces";
import { HeroesService } from "../../services/heroes.service";

interface Publisher {
  id: string;
  desc: string;
}

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"],
})
export class AddComponent implements OnInit {
  //#region variables
  publishers: Publisher[] = [
    { id: "DC Comics", desc: "DC - Comics" },
    { id: "Marvel Comics", desc: "Marvel - Comics" },
  ];
  hero: Hero = {
    superhero = string,
    publisher = Publisher,
    alter_ego = string,
    first_appearance = string,
    characters = string,
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
