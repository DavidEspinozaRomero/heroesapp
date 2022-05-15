import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  RouterStateSnapshot,
  UrlSegment,
  Route,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private _authService: AuthService) {} // private localStorage

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log("canActivate", true);
    console.log(route);
    console.log(state);

    return this._authService.verifyAuthentication();
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log("canload", true);
    console.log(route);
    console.log(segments);

    return this._authService.verifyAuthentication();
  }
}
