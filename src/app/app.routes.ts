import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';

import { LayoutVendedorComponent } from './layout-vendedor/layout-vendedor.component';
import { DashboardVendedorComponent } from './dashboard-vendedor/dashboard-vendedor.component';
import { ProfileVendedorComponent } from './profile-vendedor/profile-vendedor.component';
import { AddProductVendedorComponent } from './add-product-vendedor/add-product-vendedor.component';
import { DeleteProductVendedorComponent } from './delete-product-vendedor/delete-product-vendedor.component';
import { EditProductVendedorComponent } from './edit-product-vendedor/edit-product-vendedor.component';

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
        { path: 'dashboard-vendedor', component: DashboardVendedorComponent },
        { path: 'profile-vendedor', component: ProfileVendedorComponent },
        { path: 'add-product-vendedor', component: AddProductVendedorComponent },
        { path: 'delete-product-vendedor', component: DeleteProductVendedorComponent },
        { path: 'edit-product-vendedor', component: EditProductVendedorComponent }
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