import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, NgIf, HttpClientModule]  // ✅ importante para HttpClient
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  mensajeError: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  iniciarSesion() {
    this.http.post<any>('http://localhost:8080/api/auth/login', {
      correo: this.email,
      contrasena: this.password
    }).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('rol', response.rol);

        if (response.rol === 'VENDEDOR') {
          this.router.navigate(['/vendedor/dashboard-vendedor']);
        } else if (response.rol === 'COMPRADOR') {
          this.router.navigate(['/comprador/dashboard-comprador']);
        } else {
          this.mensajeError = 'Rol no reconocido';
        }
      },
      error: (error: HttpErrorResponse) => {
        this.mensajeError = 'Correo o contraseña incorrectos';
      }
    });
  }

  crearCuenta() {
    this.router.navigate(['/form']);
  }
}