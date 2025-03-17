import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  login(email: string, password: string): void {
    // Giả lập logic đăng nhập (thay bằng API thật)
    if (email && password) {
      this.loggedIn = true;
    }
  }

  logout(): void {
    this.loggedIn = false;
  }
}
