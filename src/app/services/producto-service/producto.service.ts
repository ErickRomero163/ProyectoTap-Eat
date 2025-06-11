import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producto } from '../../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class AddProductVendedorService {

  private dbPath = '/';

  private productos: Producto[] = [];

  constructor() {}

  agregarProducto(producto: Producto): Observable<Producto> {
    this.productos.push(producto);
    console.log('Producto agregado al array:', producto);
    return of(producto); // simulando una respuesta de API
  }

  obtenerProductos(): Observable<Producto[]> {
    return of(this.productos);
  }
}