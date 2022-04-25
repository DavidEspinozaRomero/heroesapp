import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { PathNotFoundComponent } from './path-not-found-component/path-not-found.component';



@NgModule({
  declarations: [
    MenuComponent,
    PathNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }
