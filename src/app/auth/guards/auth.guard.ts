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
import { tap } from "rxjs/operators";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private _authService: AuthService, private router: Router) {} // private localStorage

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log("canActivate");
    // console.log(route);
    // console.log(state);
    return this._authService.verifyAuthentication().pipe(
      tap((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigate(["./auth/login"]);
        }
      })
    );
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log("canload");
    // console.log(route);
    // console.log(segments);
    return this._authService.verifyAuthentication();
  }
}
