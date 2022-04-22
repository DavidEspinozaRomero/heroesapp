import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //#region variables de sidenav
  // @ViewChild('sidebar') sidebar: MatSidenav;
  //#endregion variables de sidenav
  constructor() { }

  ngOnInit(): void {
  }

}
