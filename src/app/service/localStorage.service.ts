import { Injectable } from "@angular/core";
import { AuthService } from "./auth/services/auth.service";

@Injectable({ providedIn: "root" })
export class localStorageService {
  constructor(private authService: AuthService) {}

  setStorage() {
    
  }
}
