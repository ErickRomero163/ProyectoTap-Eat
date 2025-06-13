import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-mis-productos',
  templateUrl: './edit-product-vendedor.component.html',
  styleUrls: ['./edit-product-vendedor.component.css'],
  standalone: true,
  imports: [FormsModule, NgIf, NgFor]
})
export class EditProductVendedorComponent implements OnInit {
  productos: any[] = [];
  productoSeleccionado: any = null;
  mensaje: string = '';
  apiUrl = 'http://localhost:8080/api/productos'; // Corrige tu endpoint si lo cambias

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    this.http.get<any[]>(this.apiUrl, { headers })
      .subscribe({
        next: (data) => this.productos = data,
        error: (err) => this.mensaje = 'Error al cargar productos'
      });
  }

  abrirEdicion(producto: any) {
    this.productoSeleccionado = { ...producto };
    this.mensaje = '';
    // DEBUG: muestra el producto que se va a editar
    console.log('Producto seleccionado para edición:', this.productoSeleccionado);
  }

  cerrarEdicion() {
    this.productoSeleccionado = null;
    this.mensaje = '';
  }

  guardarEdicion() {
    // DEBUG: asegúrate que el id existe antes de hacer el PUT
    if (!this.productoSeleccionado?.id) {
      alert('Error: El producto seleccionado NO tiene id. No se puede editar.');
      console.log('Objeto a editar:', this.productoSeleccionado);
      return;
    }
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  
    this.http.put<any>(
      `http://localhost:8080/api/productos/${this.productoSeleccionado.id}`,
      this.productoSeleccionado, { headers }
    ).subscribe({
      next: () => {
        const idx = this.productos.findIndex(p => p.id === this.productoSeleccionado.id);
        if (idx > -1) this.productos[idx] = { ...this.productoSeleccionado };
        this.mensaje = '¡Producto editado exitosamente!';
        setTimeout(() => this.cerrarEdicion(), 1200);
      },
      error: (err) => {
        this.mensaje = 'Error al editar: ' + (err.error?.message || err.message);
      }
    });
  }
}
