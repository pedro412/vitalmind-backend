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
  @MinLength(9, { message: 'El tel no debe se menir de 9 digitos' })
  telefono: string;
}
