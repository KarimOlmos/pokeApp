import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [],
})


export class LoginPageComponent {
  username: string = '';
  password: string = '';

  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}


  onLogin(): void {
    if (this.authService.login(this.username, this.password)) {

      this.router.navigate(['/pokemon']);

    } else {

      this.errorMessage = 'Credenciales incorrectas';

    }
  }
}
