import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  standalone: true,
  imports: [
    RouterModule,
  ],
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('bbb', this.product.id);
    
  }

  goToProductDetail(productId: string): void {
    console.log('111');
    console.log('Product ID:', productId); // Kiểm tra productId
    this.router.navigate(['/product', productId]).then(success => {
      console.log('Navigation success:', success);
    }).catch(err => {
      console.error('Navigation error:', err);
    });
  }
}
