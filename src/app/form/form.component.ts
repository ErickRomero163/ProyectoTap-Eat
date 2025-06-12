import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      numeroCelular: [''],
      contrasena: ['', [Validators.required, Validators.minLength(4)]],
      imagenurl: [''],
      tipoUsuario: ['comprador', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const { tipoUsuario, ...formData } = this.registerForm.value;

    this.http.post(`http://localhost:8080/api/auth/register/${tipoUsuario}`, formData)
      .subscribe({
        next: () => alert(`Cuenta ${tipoUsuario.toUpperCase()} creada correctamente`),
        error: err => alert('Error: ' + (err.error?.message || 'No se pudo crear la cuenta'))
      });
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
