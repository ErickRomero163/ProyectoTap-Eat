export interface Producto {
    id?: number;
    imagen?: File;
    nombre: string;
    descripcion: string;
    stock: number;
    precio: number;
    tipo: 'bebida' | 'comida' | 'snack';
  }