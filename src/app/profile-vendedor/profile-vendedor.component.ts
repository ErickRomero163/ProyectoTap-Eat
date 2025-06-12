import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-vendedor',
  standalone: true,
  templateUrl: './profile-vendedor.component.html',
  styleUrl: './profile-vendedor.component.css',
  imports: [HttpClientModule, CommonModule, FormsModule]
})
export class ProfileVendedorComponent implements OnInit {
  vendedor: any = {
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    correo: '',
    numeroCelular: '',
    contrasena: '',
    imagenUrl: '',
    disponibilidad: true
  };

  mensaje: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (!token) return;

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any>('http://localhost:8080/api/vendedores/me', { headers }).subscribe({
      next: data => this.vendedor = data,
      error: err => console.error('Error al obtener perfil:', err)
    });
  }

  guardarCambios() {
    const token = localStorage.getItem('token');
    if (!token) return;

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.put<any>('http://localhost:8080/api/vendedores/me', this.vendedor, { headers }).subscribe({
      next: response => {
        this.mensaje = 'Cambios guardados correctamente.';
      },
      error: err => {
        console.error('Error al guardar perfil:', err);
        this.mensaje = 'Hubo un error al guardar los cambios.';
      }
    });
  }
}
