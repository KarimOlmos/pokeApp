import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
})
export class ForgottenPasswordComponent {
  username: string = '';
  contraseña: string = '';
  email: string = '';
  Credentials: { username: string; password: string } | null = null;


  errorMessage: string = '';
  showPassword: boolean = false;

  constructor(private authService: AuthService) { }

  onRecover(email: string): void {
    this.Credentials = this.authService.recoverPassword(email);
    if (!this.Credentials) {
      this.errorMessage = 'No se encontró ninguna cuenta asociada a este correo electrónico.';
    } else {
      this.errorMessage = '';
      this.username = this.Credentials.username;
      this.contraseña = this.Credentials.password;
    }
  }

}
