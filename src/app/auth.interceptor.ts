import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomHttpService {
  private apiUrl = 'http://localhost:3056/v1/api';
  private defaultHeaders: HttpHeaders;

  constructor(private http: HttpClient) {
    // Cấu hình header mặc định một lần
    this.defaultHeaders = new HttpHeaders({
      Authorization: `Bearer abccccc`,
      'X-API-Key': 'your-api-key',
      'X-User-Id': '12345',
    });
  }

  // Phương thức GET
  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${endpoint}`, {
      headers: this.defaultHeaders,
    });
  }

  // Phương thức POST
  post<T>(endpoint: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${endpoint}`, body, {
      headers: this.defaultHeaders,
    });
  }

  // Có thể thêm PUT, DELETE, v.v. nếu cần
}
