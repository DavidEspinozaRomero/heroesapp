import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { switchMap } from "rxjs/operators";

import { Hero, Publisher } from "../../interfaces/heroes.interfaces";
import { HeroesService } from "../../services/heroes.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmComponent } from "../../components/confirm/confirm.component";

//#region interfaces
interface Publishers {
  id: string;
  desc: string;
}
//#endregion interfaces

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"],
})
export class AddComponent implements OnInit {
  //#region variables
  publishers: Publishers[] = [
    { id: "DC Comics", desc: "DC - Comics" },
    { id: "Marvel Comics", desc: "Marvel - Comics" },
  ];
  animal: string = "";
  name: string = "";

  // todo: add formbuilder
  hero: Hero = {
    superhero: "",
    alter_ego: "",
    characters: "",
    first_appearance: "",
    publisher: Publisher.DCComics,
    alt_img: "",
  };
  //#endregion variables
  constructor(
    public dialog: MatDialog,
    private _heroesService: HeroesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if (!this._router.url.includes("editar")) {
      return;
    }
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
      this._heroesService
        .updateHero(this.hero)
        .subscribe((hero) => this.showSnackBar("Registro Actualizado"));
    } else {
      this._heroesService.addHero(this.hero).subscribe({
        next: (hero) => {
          this.showSnackBar("Registro Creado");
          this._router.navigate(["heroes/editar", hero.id]);
        },
        error: console.log,
        complete: console.log,
      });
    }
  }

  deleteHero() {
    const dialogRef = this.dialog.open(ConfirmComponent);

    // this._heroesService.deleteHero(this.hero.id!).subscribe(() => {
    //   this._router.navigate(['/heroes']);
    // });
  }

  //#endregion apis

  //#region methods
  /**
   * The function takes a string as an argument and opens a snackbar with the message and a button that
   * says 'ok!' that closes the snackbar after 1 second.
   * @param {string} message - string - The message to show in the snack bar.
   * @author David E.
   */
  showSnackBar(message: string) {
    this._snackBar.open(message, "ok!", {
      duration: 1 * 1000,
    });
  }
  //#endregion methods
}
