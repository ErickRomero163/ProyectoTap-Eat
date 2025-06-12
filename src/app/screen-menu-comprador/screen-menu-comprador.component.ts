import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-screen-menu-comprador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './screen-menu-comprador.component.html',
  styleUrls: ['./screen-menu-comprador.component.css']
})
export class ScreenMenuCompradorComponent {
  productos = [
    {
      id: 1,
      nombre: 'Hamburguesa Clásica',
      descripcion: 'Carne de res, pan artesanal, queso cheddar...',
      imagen: 'assets/img/hamburguesa.jpg', // <-- agrégalo
      rating: 4 // <-- agrégalo
    },
    {
      id: 2,
      nombre: 'Pizza Margarita',
      descripcion: 'Queso mozzarella, jitomate y albahaca fresca.',
      imagen: 'assets/img/pizza.jpg',
      rating: 5
    }
    // Agrega más productos si quieres
  ];

  constructor(private router: Router) {}

  verDetalles(producto: any) {
    this.router.navigate(['/comprador/producto', producto.id]);
  }
}
