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
      name: 'Large Capacity Glass Cup',
      features: ['Glass Cup', 'Anti-Scalding Heat-Resistant', 'Portable Bag'],
      description: '2025 Model Glass Cup, Large Capacity, High-Definition Heat-Resistant Cup, With Handle, Small Body, High-Definition Heat Cup',
      price: 68,
      imageUrl: 'https://img.alicdn.com/bao/uploaded/i3/3547670321/O1CN01il1Qow1EF4Aw5V4Ya_!!3547670321.jpg_460x460q90.jpg_.webp'
    };
  }

}
