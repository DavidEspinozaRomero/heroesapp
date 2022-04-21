import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PathNotFoundComponent } from './shared/path-not-found-component/path-not-found.component';

const routes: Routes = [
  // {
  //   path: 'path',
  //   loadChildren: () => import('lazy-path').then(m => m.lazy-module)
  // },
  // { path: '', pathMatch: 'full', redirectTo: 'path' },
  { path: '**', component: PathNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
