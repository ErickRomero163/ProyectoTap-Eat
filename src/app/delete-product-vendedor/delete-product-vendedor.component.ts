import { Component } from '@angular/core';
import { Producto } from '../models/Producto';

@Component({
  selector: 'app-delete-product-vendedor',
  templateUrl: './delete-product-vendedor.component.html',
  styleUrls: ['./delete-product-vendedor.component.css']
})
export class DeleteProductVendedorComponent {
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Empanada de Queso',
      descripcion: 'Empanada rellena de queso oaxaca, crujiente y deliciosa.',
      imagen: '',
      stock: 10,
      precio: 15,
      tipo: 'comida'
    },
    {
      id: 2,
      nombre: 'Agua de Horchata',
      descripcion: 'Bebida fría de arroz con canela y vainilla.',
      imagen: '',
      stock: 20,
      precio: 10,
      tipo: 'bebida'
    }
  ];

  productoAEliminar: Producto | null = null;

  seleccionarProductoParaEliminar(producto: Producto) {
    this.productoAEliminar = producto;
  }

  cancelarEliminacion() {
    this.productoAEliminar = null;
  }

  confirmarEliminacion() {
    if (this.productoAEliminar) {
      this.productos = this.productos.filter(p => p.id !== this.productoAEliminar?.id);
      this.productoAEliminar = null;
    }
  }
}