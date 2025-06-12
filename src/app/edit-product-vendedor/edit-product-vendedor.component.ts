import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-product-vendedor',
  templateUrl: './edit-product-vendedor.component.html',
  styleUrls: ['./edit-product-vendedor.component.css']
})
export class EditProductVendedorComponent {
  productos = [
    {
      nombre: 'Tamal de Elote',
      descripcion: 'Delicioso tamal casero con elote fresco.',
      precio: 25.00,
      imagen: 'https://via.placeholder.com/150'
    },
    {
      nombre: 'Empanada de Queso',
      descripcion: 'Rellena de queso crema y azúcar.',
      precio: 20.00,
      imagen: 'https://via.placeholder.com/150'
    }
  ];

  editarProducto(producto: any) {
    // Aquí puedes navegar a un formulario de edición
    console.log('Editar producto:', producto);
  }
}