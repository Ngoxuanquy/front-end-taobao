import { Routes } from '@angular/router';
import { HomePageComponent } from './core/pages/home/homePage/homePage.component';

import { ShopPageComponent } from './core/pages/shop/shopPage/shopPage.component';
import { ProductDetailComponent } from './core/shared/components/product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'shop', component: ShopPageComponent },
  { path: 'product/:id', component: ProductDetailComponent },
 ];

