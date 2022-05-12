import { Component } from '@angular/core';
import { router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router) { }

  login() {
    //bakend 
    // confirmar usuario
    this.router.navigate(['./heroes'])
  }

}
