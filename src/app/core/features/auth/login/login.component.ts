import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:[BrowserModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    // Giả lập đăng nhập (thay bằng API thật nếu có)
    if (this.email && this.password) {
      this.authService.login(this.email, this.password);
      this.router.navigate(['/dashboard']);
    } else {
      alert('Please enter email and password');
    }
  }

  ngOnInit() {
  }

}
