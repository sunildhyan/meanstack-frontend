import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']  // fixed typo: styleUrl -> styleUrls
})
export class ProductListComponent implements OnInit {

  products: any[] = []; // property to store the fetched data

  constructor(private api: ServiceService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.api.productList().subscribe(
      (response: any) => {
        this.products = response; // store data in products
        console.log('Products fetched:', this.products);
      },
      (error: any) => {
        console.error('Error fetching products:', error);
      }
    );
  }


   deleteProduct(id: number) {
    console.log('Deleting product with id:', id);
    if (confirm('Are you sure you want to delete this product?')) {
      this.api.deleteProduct(id).subscribe(() => {
        this.products = this.products.filter(p => p.id !== id);
      });
    }
  }
}