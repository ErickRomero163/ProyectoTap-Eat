import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-product-vendedor',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './add-product-vendedor.component.html',
  styleUrl: './add-product-vendedor.component.css'
})
export class AddProductVendedorComponent {
  productoForm: FormGroup;
  imagenPreview: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      tipoProducto: ['', Validators.required],
      descripcion: ['', Validators.required],
      precioUnitario: [0, [Validators.required, Validators.min(1)]],
      cantidad: [1, [Validators.required, Validators.min(1)]],
      imagenUrl: ['', Validators.required]
    });
  }

  actualizarVistaPrevia(): void {
    this.imagenPreview = this.productoForm.get('imagenUrl')?.value;
  }

  onGuardarProducto(): void {
    if (this.productoForm.invalid) {
      this.productoForm.markAllAsTouched();
      return;
    }

    const producto = this.productoForm.value;

    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.post('http://localhost:8080/api/productos', producto, {
      headers,
      responseType: 'text' as const  // 👈 importante para evitar error de parseo
    }).subscribe({
      next: () => {
        alert('✅ Producto guardado correctamente');
        this.productoForm.reset();
        this.imagenPreview = null;
      },
      error: err => {
        console.error(' Error al guardar:', err);
        alert('❌ Error: ' + (err.error?.message || 'No se pudo guardar el producto'));
      }
    });
  }
}
