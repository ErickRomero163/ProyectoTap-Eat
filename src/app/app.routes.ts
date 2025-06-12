import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { LayoutVendedorComponent } from './layout-vendedor/layout-vendedor.component';
import { DashboardVendedorComponent } from './dashboard-vendedor/dashboard-vendedor.component';

import { LayoutCompradorComponent } from './layout-comprador/layout-comprador.component';
import { DashboardCompradorComponent } from './dashboard-comprador/dashboard-comprador.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },

    { path: 'login', component: LoginComponent },
    { path: 'form', component: FormComponent},
  
    // Rutas protegidas por rol
    {
      path: 'vendedor',
      component: LayoutVendedorComponent,
      children: [
        { path: 'dashboard-vendedor', component: DashboardVendedorComponent } // bajo layout vendedor
      ]
    },
    {
      path: 'comprador',
      component: LayoutCompradorComponent,
      children: [
        { path: 'dashboard-comprador', component: DashboardCompradorComponent }
       ]
    },
];