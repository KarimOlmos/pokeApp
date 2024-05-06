import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: { username: string; password: string }[] = [
    { username: 'usuario', password: '12345' },
  ];

  constructor() { }


  login(username: string, password: string): boolean {
    const user = this.users.find(
      (u) => u.username === username && u.password === password
    );

    return !!user;
  }


  register(username: string, password: string): void {

    this.users.push({ username, password });
  }

}
