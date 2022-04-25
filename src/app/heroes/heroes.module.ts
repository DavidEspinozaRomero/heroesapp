import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroesRoutingModule } from './heroes-routing.module';

import { MaterialModule } from '../material/material.module';
import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroeCardComponent } from './components/heroe-card.component';
import { ImagePipe } from './pipes/image.pipe';

@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    SearchComponent,
    HeroeComponent,
    HomeComponent,
    HeroeCardComponent,
    ImagePipe,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HeroesRoutingModule,
    MaterialModule,
  ],
})
export class HeroesModule {}
