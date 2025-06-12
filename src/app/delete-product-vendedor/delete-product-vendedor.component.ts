import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-product-vendedor',
  templateUrl: './delete-product-vendedor.component.html',
  styleUrl: './delete-product-vendedor.component.css'
})
export class DeleteProductVendedorComponent {
  confirmarEliminacion(nombreProducto: string) {
    const confirmar = confirm(`¿Estás seguro de que deseas eliminar "${nombreProducto}"?`);
    if (confirmar) {
      console.log(`Producto eliminado: ${nombreProducto}`);
      // Aquí podrías hacer la lógica para eliminarlo de tu backend o arreglo local
    }
  }
}