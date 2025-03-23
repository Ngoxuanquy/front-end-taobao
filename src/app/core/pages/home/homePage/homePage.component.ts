import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomHttpService } from '../../../../auth.interceptor';
@Component({
  selector: 'app-homePage',
  standalone: true,
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.scss'],
})
export class HomePageComponent implements OnInit {
  users: any[] = [];
  ngOnInit(): void {
    this.getUsers();
  }
  constructor(private http: CustomHttpService) {} // Inject CustomHttpService

  getUsers() {
    console.log('abcbcbcbcbcb');
    this.http.get<any>('users').subscribe({
      next: (data) => {
        this.users = data;
        console.log(this.users);
      },
      error: (err) => {
        console.error('Lỗi khi gọi API:', err);
      },
    });
  }
}
