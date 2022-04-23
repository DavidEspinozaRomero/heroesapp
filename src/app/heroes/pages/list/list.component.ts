import { Component, OnInit } from "@angular/core";
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  constructor(private _heroesService: HeroesService) {}

  ngOnInit(): void {}
  getHeroes() {
    this._heroesService.getHeroes().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {},
    });
  }
}
