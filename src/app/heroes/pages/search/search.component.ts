import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Hero } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  heroesList: Hero[] = [];
  heroSelected: Hero | undefined;
  searchForm: FormGroup = this.fb.group({
    inputHero: ['', Validators.required],
  });
  constructor(private _heroesService: HeroesService, private fb: FormBuilder) {}

  ngOnInit(): void {}
  searching() {
    this._heroesService
      .getSugestionHeroes(this.searchForm.controls.inputHero.value)
      .subscribe({
        next: (heroes) => (this.heroesList = heroes),
        error: console.log,
        complete: console.log,
      });
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.heroSelected = undefined;
      return;
    }
    const hero: Hero = event.option.value;
    this.searchForm.controls.inputHero.reset(hero.superhero);

    this._heroesService.getHeroeById(hero.id!).subscribe({
      next: (heroe) => {
        this.heroSelected = heroe;
      },
      error: console.log,
      complete: console.log,
    });
  }
}
