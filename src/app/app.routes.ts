import { Routes } from '@angular/router';
import { ProductViewComponent } from './component/product-view/product-view.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductViewComponent,
    pathMatch: 'full',
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
  },
];
