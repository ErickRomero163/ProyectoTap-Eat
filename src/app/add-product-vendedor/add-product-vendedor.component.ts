import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product-vendedor',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-product-vendedor.component.html',
  styleUrl: './add-product-vendedor.component.css'
})
export class AddProductVendedorComponent {
  productoForm: FormGroup;
  imagenPreview: string | ArrayBuffer | null = null;
  imagenFile: File | null = null;

  constructor(private fb: FormBuilder) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      cantidad: [1, [Validators.required, Validators.min(1)]],
      precio: [0, [Validators.required, Validators.min(1)]],
      tipo: ['', Validators.required],
      descripcion: ['', Validators.required],
    });
  }

  onImagenSeleccionada(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.imagenFile = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.imagenPreview = reader.result;
      };
      reader.readAsDataURL(this.imagenFile);
    }
  }

  onGuardarProducto(): void {
    if (this.productoForm.invalid) {
      this.productoForm.markAllAsTouched();
      return;
    }

    const producto = {
      ...this.productoForm.value,
      imagen: this.imagenFile,
    };

    console.log('Producto guardado:', producto);
    // Aquí podrías llamar a un servicio para enviarlo al backend, por ejemplo:
    // this.productoService.guardarProducto(producto).subscribe(...);
  }
}