export class ContactoDetailDto {
  contactoId: number;
  nombre: string;
  correo: string;
  telefono: string;
  fechaCreacion: Date;
  visto: boolean;

  cuestionarioId: number;
  genero: string;
  edad: number;
  orientacionSexual: string;
  situacionSentimental: string;
}
