// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/features/auth/login/login.component'; // Import LoginComponent
import { AuthGuard } from './core/guards/auth.guard';
import { HomePageComponent } from './core/pages/home/homePage/homePage.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent }, // Route cho Home
  { path: 'login', component: LoginComponent }, // Route cho Login
  { path: 'dashboard', canActivate: [AuthGuard], component: LoginComponent }, // Route cho Dashboard (có thể thay bằng DashboardComponent)
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Redirect mặc định về /home
];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule] // Export để AppModule có thể dùng
})
export class AppRoutingModule {}
