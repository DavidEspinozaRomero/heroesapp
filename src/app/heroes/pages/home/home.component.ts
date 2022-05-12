import { Component, OnInit, ViewChild } from '@angular/core';
import { router } from "@angular/router";
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //#region variables de sidenav
  // @ViewChild('sidenav') sidenav: MatSidenav;
  navItemList = [
    // {title: 'login', routerLink: '/auth/login' },
    // {title: 'registro', routerLink: '/auth/register' },
    {icon: 'label', title: 'listado de Heroes', routerLink: './listado' },
    {icon: 'add', title: 'agregar Heroe', routerLink: './agregar' },
    {icon: 'search', title: 'buscar Heroe', routerLink: './buscar' },
    {icon: 'label', title: 'editar', routerLink: './editar/1' },
    {icon: 'label', title: 'heroe', routerLink: './12' },
  ]
  //#endregion variables de sidenav

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigate(['./auth'])
  }

}
