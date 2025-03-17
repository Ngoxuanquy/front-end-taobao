import { Routes } from '@angular/router';
import { HomePageComponent } from './core/pages/home/homePage/homePage.component';
import { LoginComponent } from './core/features/auth/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    { path: 'home', component: HomePageComponent }, // Route cho Home
    { path: 'login', component: LoginComponent }, // Route cho Login
    { path: 'dashboard', canActivate: [AuthGuard], component: LoginComponent }, // Route cho Dashboard (có thể thay bằng DashboardComponent)
    { path: '', redirectTo: '/home', pathMatch: 'full' } 
];
