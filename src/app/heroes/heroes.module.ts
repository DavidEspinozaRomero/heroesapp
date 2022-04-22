import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroesRoutingModule } from "./heroes-routing.module";

import { ListComponent } from "./pages/list/list.component";
import { AddComponent } from "./pages/add/add.component";
import { EditComponent } from "./pages/edit/edit.component";
import { SearchComponent } from "./pages/search/search.component";
import { HeroeComponent } from "./pages/heroe/heroe.component";
import { HomeComponent } from "./pages/heroe/home.component";

@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    SearchComponent,
    HeroeComponent,
    HomeComponent,
  ],
  imports: [CommonModule, HeroesRoutingModule],
})
export class HeroesModule {}
