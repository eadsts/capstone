import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.class';
import { Observable } from 'rxjs';

const baseurl: string = "http://localhost:62513/api/products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  //gets all producrs
  list(): Observable<Product[]> {
    return this.http.get(`${baseurl}`) as Observable<Product[]>;
  }
  //gets single product by id
  get(id: number): Observable<Product> {
    return this.http.get(`${baseurl}/${id}`) as Observable<Product>;
  }
  //inserts a product
  create(product: Product): Observable<Product> {
    return this.http.post(`${baseurl}`, product) as Observable<Product>;
  }

  //updates a product
  change(product: Product): Observable<any> {
    return this.http.put(`${baseurl}/${product.id}`, product) as Observable<any>;
  }

  //deletes a product
  remove(product: Product): Observable<Product> {
    return this.http.delete(`${baseurl}/${product.id}`) as Observable<Product>;
  }
}

