import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // ✅ Asegúrate de tener esto

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient() // ✅ Esto es obligatorio para usar HttpClient
  ]

  
};

// src/app/config.ts
export const API_BASE_URL = 'http://localhost:8080/api';
