import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateContactoDto {
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre: string;

  @IsEmail({}, { message: 'El correo es invalido' })
  @IsNotEmpty({ message: 'El correo es obligatorio' })
  correo: string;

  @IsOptional()
  @MaxLength(15, { message: 'El tel no debe ser mayor a 15 digitos' })
  telefono: string;

  @IsNotEmpty()
  genero: string;

  @IsNotEmpty()
  edad: number;

  @IsNotEmpty()
  orientacionSexual: string;

  @IsNotEmpty()
  situacionSentimental: string;

  @IsNotEmpty()
  hasTomadoTerapia: boolean;

  @IsNotEmpty()
  saludFisica: string;

  sentimientos: string;

  @IsNotEmpty()
  ganasDeHacerCosas: string;

  @IsNotEmpty()
  vinculoEmocional: string;

  @IsNotEmpty()
  meCuestaDefinirme: string;

  @IsNotEmpty()
  heSentidoAnsiedad: string;

  @IsNotEmpty()
  meCuestaPonerLimites: string;

  @IsNotEmpty()
  problemasParaDormir: string;

  @IsNotEmpty()
  estado: string;
}
