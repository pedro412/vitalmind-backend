import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, Min, Max, IsNotEmpty } from 'class-validator';

@Entity({ name: 'contactos' })
export class Contacto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  correo: string;

  @Column()
  telefono: string;

  @Column()
  fechaCreacion: Date;

  @Column({ default: false })
  visto: boolean;
}
