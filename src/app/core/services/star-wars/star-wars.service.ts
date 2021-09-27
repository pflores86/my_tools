import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
//import { Product } from './../../models/product.model';

import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  constructor(
    private http: HttpClient
  ) { }
  getAll(type:string) {
    return this.http.get(`${environment.url_api}/${type}`).pipe(map(res => JSON.parse(JSON.stringify(res))));
  }

  /*<Product[]>getAllProducts() {
    return this.http.get<Product[]>(`${environment.url_api}/products`);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post(`${environment.url_api}/products`, product);
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put(`${environment.url_api}/products/${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }*/
}
