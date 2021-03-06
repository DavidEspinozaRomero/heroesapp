import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { LocalStorageService } from "../../../service/localStorage.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  constructor(private router: Router, private auth: AuthService,
    private _localStorage: LocalStorageService) {}

  login() {
    // ir bakend
    // un usuario
    this.auth.login().subscribe({
      next: (res:any) => {
        
        if (res.id) {
          this.router.navigate(["./heroes"]);
        }
      },
      error: console.log,
      complete: console.log,
    });
  }
}
