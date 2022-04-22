import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroeComponent } from './pages/heroe/heroe.component';

const routes: Routes = [
  { path: 'listado', component: ListComponent },
  { path: 'agregar', component: AddComponent },
  { path: 'editar/:id', component: AddComponent },
  { path: 'buscar', component: SearchComponent },
  { path: ':id', component: HeroeComponent },
  { path: '**', redirectTo: 'listado'  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
