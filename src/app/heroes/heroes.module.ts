import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroesRoutingModule } from "./heroes-routing.module";

import { ListComponent } from "./pages/list/list.component";
import { AddComponent } from "./pages/add/add.component";
import { SearchComponent } from "./pages/search/search.component";
import { HeroeComponent } from "./pages/heroe/heroe.component";
import { HomeComponent } from "./pages/home/home.component";
import { HeroeCardComponent } from "./components/heroe-card.component";

@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    SearchComponent,
    HeroeComponent,
    HomeComponent,
    HeroeCardComponent,
  ],
  imports: [CommonModule, HeroesRoutingModule],
})
export class HeroesModule {}
