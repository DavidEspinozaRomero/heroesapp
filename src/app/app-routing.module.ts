import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/guards/auth.guard";

import { PathNotFoundComponent } from "./shared/path-not-found-component/path-not-found.component";

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "heroes",
    loadChildren: () =>
      import("./heroes/heroes.module").then((m) => m.HeroesModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
  },
  { path: "404", component: PathNotFoundComponent },
  { path: "**", pathMatch: "full", redirectTo: "404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
