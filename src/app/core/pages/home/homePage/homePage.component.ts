import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../../../shared/components/product/product.component';

@Component({
  selector: 'app-homePage',
  standalone: true,
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.scss'],
  imports: [
    ProductComponent,
  ]
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
