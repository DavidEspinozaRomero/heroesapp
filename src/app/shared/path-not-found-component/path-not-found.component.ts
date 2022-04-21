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
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
