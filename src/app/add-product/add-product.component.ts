import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
// import { HeaderComponent } from "../header/header.component";
import { ServiceService } from '../service/service.service';
import { RouterModule } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule, CommonModule, RouterModule ],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productForm: FormGroup;
  categories = ['Electronics', 'Clothing', 'Books', 'Other']; // example categories

  constructor(private fb: FormBuilder, private api: ServiceService) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0.01)]],
      category: ['', Validators.required],
      inStock: [true]  // default to true
    });
  }

 onSubmit() {
  if (this.productForm.valid) {
    const product = { ...this.productForm.value };

    this.api.addProduct(product).subscribe({
      next: (response) => {
        console.log('Product added successfully:', response);
        alert('Product added successfully!');
        // Reset form and keep 'inStock' checked by default
        this.productForm.reset({ inStock: true });
      },
      error: (err) => {
        console.error('Error adding product:', err);
        // Show a friendly error to the user
        alert('Failed to add product. Please try again.');
      }
    });
  }
}

}
