import { Component } from '@angular/core';
import { AddProductVendedorService } from '../services/producto-service/producto.service';
import { Producto } from '../models/Producto';

@Component({
  selector: 'app-add-product-vendedor',
  standalone: true,
  imports: [
    
  ],
  templateUrl: './add-product-vendedor.component.html',
  styleUrl: './add-product-vendedor.component.css'
})
export class AddProductVendedorComponent {
  producto: Producto = {
    id: 0,
    nombre: '',
    descripcion: '',
    stock: 0,
    precio: 0,
    tipo: 'bebida'
  };
  imagenSeleccionada: File | null = null;

  constructor(private addProductVendedorService: AddProductVendedorService) {}

  onImagenSeleccionada(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.imagenSeleccionada = file;
    }
  }

  onGuardarProducto(): void {
    if (this.imagenSeleccionada) {
      this.producto.imagen = this.imagenSeleccionada;
    }

    this.addProductVendedorService.agregarProducto(this.producto).subscribe({
      next: (res) => {
        console.log('Producto guardado con éxito', res);
      },
      error: (err) => {
        console.error('Error al guardar el producto', err);
      }
    });
  }
}
