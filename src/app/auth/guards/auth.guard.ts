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
export class AuthGuard implements CanLoad {
  constructor() {}

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   return true;
  // }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log(route, segments);

    return true;
  }
}
