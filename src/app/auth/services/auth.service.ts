import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Obserbable } from "rxjs";
import { tap, map } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { Auth } from "../interfaces/auth.interface";
import { LocalStorageService } from "../../service/localStorage.service";

@Injectable({ providedIn: "root" })
export class AuthService {
  //#region variables
  private _auth: Auth | undefined;

  get auth(): Auth {
    return { ...this._auth! };
  }

  //#endregion variables
  constructor(private http: HttpClient, private _localStorage:LocalStorageService) {}

  verifyAuthentication(): Observable<boolean> {
    if (!this._localStorageService.getStorage('user')) {
      return of(false)
    }
    return this.http.get<Auth>(`${url}/usuarios/1`).pipe(
      map(auth => {
        console.log(auth);
        return true
      })
    )

    // return of(true)
  }

  login() {
    const url = environment.urlApp;
    return this.http.get<Auth>(`${url}/usuarios/1`).pipe(
      tap((auth) => (this._auth = auth)),
      tap((auth) => this._localStorage.setStorage("user", auth))
    );
  }

  logout() {
    this._auth = undefined;
  }
}
