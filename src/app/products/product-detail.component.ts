import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;
  errorMessage: string;
  productId: number;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) {
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.productId = +this.route.snapshot.paramMap.get('id');
    this.product = this.productService.getProduct(this.productId);
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
