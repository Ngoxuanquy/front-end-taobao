import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../../../shared/components/product/product.component';
import { Product } from '../../../models/product.model';
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
  productEx!: Product;
  ngOnInit() {
    this.productEx = {
      id:'aaaaa',
      product_name: 'Large Capacity Glass Cup',
      product_thumb: 'https://bizweb.dktcdn.net/100/368/426/products/vay-trang-cup-nguc-dep.jpg?v=1739251870663',
      product_description: '2025 Model Glass Cup, Large Capacity, High-Definition Heat-Resistant Cup, With Handle, Small Body, High-Definition Heat Cup',
      product_price: 68,
      product_quantity: 10,
      product_type: 'Kitchenware',
      product_attributes: {
        material: 'Glass',
        features: ['Anti-Scalding Heat-Resistant', 'Portable Bag'],
        capacity: '500ml'
      },
      product_discount: 5,
      product_ratingsAverage: 4.8,
      isDraft: false,
      isPublished: true,
    };
  }

}
