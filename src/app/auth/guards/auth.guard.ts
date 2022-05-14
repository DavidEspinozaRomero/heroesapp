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

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanLoad, CanActivate {
  constructor() {} // private localStorage

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log("canActivate", true);
    console.log(route);
    console.log(segments);
    // local storage user
    // if (!user.id) {
    //   return false
    // }

    return true;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log("canload", true);
    console.log(route);
    console.log(segments);
    // local storage user
    // if (!user.id) {
    //   return false
    // }

    return true;
  }
}
