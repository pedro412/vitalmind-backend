import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'cuestionarios' })
export class Cuestionario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  genero: string;

  @Column()
  edad: number;

  @Column()
  orientacionSexual: string;

  @Column()
  situacionSentimental: string;
}
