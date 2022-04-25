import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {
  //traer de los parametros y mostrar el id del heroes en consola
  constructor() { }

  ngOnInit(): void {
  }

}
