import { Component, inject } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { ProductType } from '../../shared/type.model';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [NgFor, NgIf, RouterModule],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css',
})
export class ProductViewComponent {
  apiService: ApiService = inject(ApiService);
  products: ProductType[] = [];
  isLoading: boolean = false;

  ngOnInit(): void {
    this.displayProducts();
    console.log('je');
  }

  displayProducts() {
    this.isLoading = true;
    this.apiService.getProducts().subscribe((data) => {
      this.products = data.products;
      console.log(data);
    });
    this.isLoading = false;
  }
}
