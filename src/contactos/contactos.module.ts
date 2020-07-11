import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contacto } from './contactos.entity';
import { ContactosService } from './contactos.service';
import { ContactosController } from './contactos.controller';
import { Cuestionario } from './cuestionarios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contacto, Cuestionario])],
  providers: [ContactosService],
  controllers: [ContactosController],
})
export class ContactosModule {}
