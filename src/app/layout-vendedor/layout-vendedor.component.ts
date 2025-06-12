import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-vendedor',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout-vendedor.component.html',
  styleUrl: './layout-vendedor.component.css'
})
export class LayoutVendedorComponent {
  cerrarSesion() {
    console.log('Cerrar sesión vendedor');
  }
}
