import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contacto } from './contactos.entity';
import { CreateContactoDto } from './dto/create-contacto.dto';

@Injectable()
export class ContactosService {
  constructor(
    @InjectRepository(Contacto)
    private contactosRepository: Repository<Contacto>,
  ) {}

  findAll(): Promise<Contacto[]> {
    return this.contactosRepository.find();
  }

  findOne(id: string): Promise<Contacto> {
    return this.contactosRepository.findOne(id);
  }

  create(createUserDto: CreateContactoDto): Promise<Contacto> {
    const contacto = new Contacto();
    contacto.nombre = createUserDto.nombre;
    contacto.correo = createUserDto.correo;
    contacto.telefono = createUserDto.telefono;
    contacto.fechaCreacion = new Date();
    contacto.visto = false;

    return this.contactosRepository.save(contacto);
  }

  async seen(id: string): Promise<void> {
    let contactoToUpdate = await this.contactosRepository.findOne(id);
    contactoToUpdate.visto = true;
    this.contactosRepository.save(contactoToUpdate);
  }

  async remove(id: string): Promise<void> {
    await this.contactosRepository.delete(id);
  }
}
