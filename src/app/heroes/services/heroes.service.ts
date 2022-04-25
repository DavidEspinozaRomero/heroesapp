import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Hero } from '../interfaces/heroes.interfaces';

@Injectable({ providedIn: 'root' })
export class HeroesService {
  constructor(private _http: HttpClient) {}

  /**
   * The function returns Heroes
   * @returns Observable<Hero[]>
   */
  getHeroes(): Observable<Hero[]> {
    const URL: string = `${environment.urlApp}/heroes`;
    return this._http.get<Hero[]>(`${environment.urlApp}/heroes`);
  }
  /**
   * It returns a Hero.
   * @param {string} id - The id of the hero to retrieve.
   * @returns Observable  Hero;
   */
  getHeroeById(id: string): Observable<Hero> {
    const URL: string = `${environment.urlApp}/heroes/${id}`;
    return this._http.get<Hero>(URL);
  }
  getSugestionHeroes(termino: string): Observable<Hero[]> {
    const URL: string = `${environment.urlApp}/heroes`;
    return this._http.get<Hero[]>(
      `${environment.urlApp}/heroes?q=${termino}&_limit=6`
    );
  }
}
