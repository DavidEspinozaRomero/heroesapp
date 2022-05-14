import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  constructor(private router: Router, private auth: AuthService) {}

  login() {
    // ir bakend
    // un usuario
    this.router.navigate(["./heroes"]);
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
