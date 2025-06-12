export interface Producto {
    id?: number;
    imagen: string;
    nombre: string;
    descripcion: string;
    stock: number;
    precio: number;
    tipo: 'bebida' | 'comida' | 'snack';
  }