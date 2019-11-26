import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/product');
  }
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>('http://localhost:8080/product', product);
  }

}
