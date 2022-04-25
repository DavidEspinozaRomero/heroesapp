import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../../environments/environment";
import { Hero } from "../interfaces/heroes.interfaces";

@Injectable({ providedIn: "root" })
export class HeroesService {
  constructor(private _http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    const URL: number = `${environment.urlApp}/heroes`;
    return this._http.get<Hero[]>(URL);
  }
}
