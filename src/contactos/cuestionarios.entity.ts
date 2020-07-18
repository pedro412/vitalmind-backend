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

  @Column()
  hasTomadoTerapia: boolean;

  @Column()
  saludFisica: string;

  @Column()
  sentimientos: string;

  @Column()
  ganasDeHacerCosas: string;

  @Column()
  vinculoEmocional: string;

  @Column()
  meCuestaDefinirme: string;

  @Column()
  heSentidoAnsiedad: string;

  @Column()
  meCuestaPonerLimites: string;

  @Column()
  problemasParaDormir: string;

  @Column()
  estado: string;
}
