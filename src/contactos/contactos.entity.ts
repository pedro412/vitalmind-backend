import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  JoinTable,
} from 'typeorm';
import { Cuestionario } from './cuestionarios.entity';

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

  @Column()
  cuestionarioId: number;

  @OneToOne(type => Cuestionario)
  @JoinColumn()
  cuestionario: Cuestionario;
}
