import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { tap } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { Auth } from "../interfaces/auth.interface";

@Injectable({ providedIn: "root" })
export class AuthService {
  //#region variables
  _auth: Auth | undefined;
  // private _auth: Auth | undefined;

  // get auth(): Auth {
  //   return { ...this._auth };
  // }

  //#endregion variables
  constructor(private http: HttpClient) {}

  login() {
    const url = environment.urlApp;
    return this.http
      .get<Auth>(`${url}/usuarios/1`)
      .pipe(tap((auth) => (this._auth = auth)));
  }
}
