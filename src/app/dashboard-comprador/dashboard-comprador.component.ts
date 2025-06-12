import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-comprador',
  templateUrl: './dashboard-comprador.component.html',
  styleUrls: ['./dashboard-comprador.component.css']
})
export class DashboardCompradorComponent {
  productos = [
    {
      id: 1,
      nombre: 'Hamburguesa',
      descripcion: 'Pan, carne, queso y vegetales.',
      imagen: 'assets/img/hamburguesa.jpg',
      rating: 5,
      categoria: 'comida'
    },
    {
      id: 2,
      nombre: 'Jugo Natural',
      descripcion: 'Naranja 100% exprimido.',
      imagen: 'assets/img/jugo.jpg',
      rating: 4,
      categoria: 'bebida'
    },
    {
      id: 3,
      nombre: 'Papas Fritas',
      descripcion: 'Crujientes y doradas.',
      imagen: 'assets/img/papas.jpg',
      rating: 5,
      categoria: 'snack'
    }
  ];

  // Esta es la función que necesitas agregar para evitar el error
  verDetalles(producto: any) {
    console.log('Producto seleccionado:', producto);
    // Aquí podrías mostrar un modal, redirigir a otra vista, etc.
  }
}