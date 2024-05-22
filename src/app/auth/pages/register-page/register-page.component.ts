import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: [],
})
export class RegisterPageComponent {
  username: string = '';
  contrasena: string = '';
  email: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister(username: string, contrasena: string, email:string): void {
    this.authService.register(username, contrasena, email);
    this.router.navigate(['/auth/login']);
  }


}
