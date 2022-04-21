import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-path-not-found',
  templateUrl: './path-not-found.component.html',
  styleUrls: ['./path-not-found.component.scss']
})
export class PathNotFoundComponent implements OnInit {

  navItemList = [
    {title: 'login', routerLink: '/auth/login' },
    {title: 'registro', routerLink: '/auth/register' },
    {title: 'listado', routerLink: '/heroes/listado' },
    {title: 'agregar', routerLink: '/heroes/agregar' },
    {title: 'editar', routerLink: '/heroes/editar' },
    {title: 'buscar', routerLink: '/heroes/buscar' },
    {title: 'heroe', routerLink: '/heroes/:id' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
