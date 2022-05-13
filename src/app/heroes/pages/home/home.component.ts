import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { MatSidenav } from "@angular/material/sidenav";

import { AuthService } from "../../../auth/services/auth.service";
import { Auth } from "../../auth/interfaces/auth.interface";


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  //#region variables de sidenav
  // @ViewChild('sidenav') sidenav: MatSidenav;
  navItemList = [
    // {title: 'login', routerLink: '/auth/login' },
    // {title: 'registro', routerLink: '/auth/register' },
    { icon: "label", title: "listado de Heroes", routerLink: "./listado" },
    { icon: "add", title: "agregar Heroe", routerLink: "./agregar" },
    { icon: "search", title: "buscar Heroe", routerLink: "./buscar" },
    { icon: "label", title: "editar", routerLink: "./editar/1" },
    { icon: "label", title: "heroe", routerLink: "./12" },
  ];
  
  get auth(): Auth {
    return this.auth.auth
  }
  //#endregion variables de sidenav

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  logout() {
    this.router.navigate(["./auth"]);
  }
}
