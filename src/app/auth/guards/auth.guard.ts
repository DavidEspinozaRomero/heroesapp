import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlSegment,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class NameGuard implements CanActivate {
  constructor() {}

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   return true;
  // }

  canLoad(
    route: Router,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
