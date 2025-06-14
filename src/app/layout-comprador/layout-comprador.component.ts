import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout-vendedor',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './layout-comprador.component.html',
  styleUrls: ['./layout-comprador.component.css']
})
export class LayoutCompradorComponent {
  cerrarSesion() {
    console.log('Cerrar sesión vendedor');
  }
}