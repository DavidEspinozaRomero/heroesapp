import { Injectable } from "@angular/core";
import { AuthService } from "./auth/services/auth.service";

@Injectable({ providedIn: "root" })
export class LocalStorageService {
  constructor(private authService: AuthService) {}

  setStorage(key:string, data:any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getStorage(key:string) {
    const local = localStorage.getItem(key);
    return JSON.parse(local);
  }
}
