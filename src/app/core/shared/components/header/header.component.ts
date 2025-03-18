import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) {}
 searchQuery: string = '';
  isScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check if window is scrolled beyond a threshold (e.g., 100px)
    this.isScrolled = window.scrollY > 100;
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  onSearch(): void {
    console.log('Searching for:', this.searchQuery);
  }

  ngOnInit() {
  }

}
