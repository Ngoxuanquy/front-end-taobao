import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './core/pages/home/homePage/homePage.component';


const routes: Routes = [
  { path: '', component: HomePageComponent }, // Route mặc định
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
