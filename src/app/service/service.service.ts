import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseUrl: string = 'http://localhost:3000';
  
constructor(private http: HttpClient) {}


  productList(): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/api/products`);
  }

  addProduct(data: any): Observable<Product> {
    return this.http.post<any>(`${this.baseUrl}/api/products`, data);
  }

   deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.baseUrl}/api/products/${id}`);
  }
}
