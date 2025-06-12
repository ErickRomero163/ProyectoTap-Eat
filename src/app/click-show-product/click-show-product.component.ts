import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-click-show-product',
  standalone: true,
  imports: [],
  templateUrl: './click-show-product.component.html',
  styleUrls: ['./click-show-product.component.css']
})
export class ClickShowProductComponent implements OnInit {
  nombreProducto: string = '';
  imagenProducto: string = '';
  vendedor: string = '';
  descripcionProducto: string = '';
  estrellas: string = '';
  cantidadDisponible: number = 0;
  precio: number = 0;
  tipoProducto: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // Aquí normalmente traerías los datos desde un servicio, pero simulo con datos estáticos:
    if (id === '1') {
      this.nombreProducto = 'Hamburguesa Clásica';
      this.imagenProducto = 'ruta/hamburguesa.jpg';
      this.vendedor = 'Juan Pérez';
      this.descripcionProducto = 'Pan artesanal, carne de res 100%, queso cheddar, lechuga, jitomate y aderezo especial.';
      this.estrellas = '★★★★☆';
      this.cantidadDisponible = 12;
      this.precio = 45.00;
      this.tipoProducto = 'Comida';
    } else {
      // Datos por defecto o para otro id
      this.nombreProducto = 'Producto desconocido';
      // y así...
    }
  }
}
