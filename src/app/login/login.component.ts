import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, NgIf]
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  mensajeError: string = '';

  constructor(private router: Router) {}

  iniciarSesion() {
    if (this.email === '10' && this.password === '1') {
      this.router.navigate(['/vendedor/dashboard-vendedor']);
    } else if (this.email === '20' && this.password === '2') {
      this.router.navigate(['/comprador/dashboard-comprador']);
    } else {
      this.mensajeError = 'Credenciales inválidas';
    }
  }

  crearCuenta() {
    this.router.navigate(['/form']);
  }
}