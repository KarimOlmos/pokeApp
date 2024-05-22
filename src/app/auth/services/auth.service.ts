import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: { username: string; password: string, email:string }[] = [
    { username: 'usuario', password: '12345', email: 'usuario@user.com'},
  ];

  constructor() { }


  login(username: string, password: string): boolean {
    const user = this.users.find(
      (u) => u.username === username && u.password === password
    );

    return !!user;
  }


  register(username: string, password: string, email:string): void {

    this.users.push({ username, password, email });
  }

  recoverPassword(email: string): { username: string; password: string } | null {
    const user = this.users.find(u => u.email === email);
    return user ? { username: user.username, password: user.password } : null;
  }


}
