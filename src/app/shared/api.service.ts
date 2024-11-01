import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductListType } from './type.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private appUrl = 'https://dummyjson.com/products';

  getProducts() {
    return this.http.get<ProductListType>(this.appUrl);
  }
}
