import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../../environments/environment";
import { Auth } from "../interfaces/auth.interface";
import { tap } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class AuthService {
  //#region variables
  private _auth: Auth | undefined;

  public get auth(): string {
    return { ...this._auth };
  }

  //#endregion variables
  constructor(private http: HttpClient) {}

  login() {
    const url = this.environment.urlApp;
    return this.http
      .get<Auth>(`${url}/usuarios/1`)
      .pipe(tap((auth) => (this._auth = auth)));
  }
}
