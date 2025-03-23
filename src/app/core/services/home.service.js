import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class homeService {
  getUsers() {
    console.log("abcbcbcbcbcb");
    this.http.get <
      any >
      "users".subscribe({
        next: (data) => {
          this.users = data;
          console.log(this.users);
        },
        error: (err) => {
          console.error("Lỗi khi gọi API:", err);
        },
      });
  }

  postUsers(userData) {
    console.log("Posting user data:", userData);
    this.http.post <
      any >
      ("users", userData).subscribe({
        next: (response) => {
          console.log("User posted successfully:", response);
          this.users.push(response);
        },
        error: (err) => {
          console.error("Lỗi khi gửi POST request:", err);
        },
      });
  }
}
