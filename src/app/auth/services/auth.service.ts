import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, of } from "rxjs";
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
  constructor(
    private http: HttpClient,
    private _localStorage: LocalStorageService
  ) {}

  verifyAuthentication(): Observable<boolean> {
    if (!this._localStorage.getStorage("token")) {
      return of(false);
    }
    return this.http.get<Auth>(`${environment.urlApp}/usuarios/1`).pipe(
      map((auth) => {
        console.log(auth);
        return true;
      })
    );

    // return of(true)
  }

  login() {
    return this.http.get<Auth>(`${environment.urlApp}/usuarios/1`).pipe(
      tap((auth) => (this._auth = auth)),
      tap((auth) => this._localStorage.setStorage("token", auth.id))
    );
  }

  logout() {
    localStorage.removeItem('token')
  }
}
