import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contacto } from './contactos.entity';
import { CreateContactoDto } from './dto/create-contacto.dto';
import { Cuestionario } from './cuestionarios.entity';

@Injectable()
export class ContactosService {
  constructor(
    @InjectRepository(Contacto)
    private contactosRepository: Repository<Contacto>,
    @InjectRepository(Cuestionario)
    private cuestionariosRepository: Repository<Cuestionario>,
  ) {}

  findAll(): Promise<Contacto[]> {
    return this.contactosRepository.find({ order: { fechaCreacion: 'DESC' } });
  }

  async findOne(id: string): Promise<Contacto> {
    const contacto = await this.contactosRepository.findOne({
      where: { id: id },
      relations: ['cuestionario'],
    });

    return contacto;
  }

  async create(createUserDto: CreateContactoDto): Promise<Contacto> {
    const cuestionario = new Cuestionario();
    cuestionario.edad = createUserDto.edad;
    cuestionario.genero = createUserDto.genero;
    cuestionario.orientacionSexual = createUserDto.orientacionSexual;
    cuestionario.situacionSentimental = createUserDto.situacionSentimental;
    cuestionario.hasTomadoTerapia = createUserDto.hasTomadoTerapia;
    cuestionario.saludFisica = createUserDto.saludFisica;
    cuestionario.sentimientos = createUserDto.sentimientos;
    cuestionario.ganasDeHacerCosas = createUserDto.ganasDeHacerCosas;
    cuestionario.vinculoEmocional = createUserDto.vinculoEmocional;
    cuestionario.meCuestaDefinirme = createUserDto.meCuestaDefinirme;
    cuestionario.heSentidoAnsiedad = createUserDto.heSentidoAnsiedad;
    cuestionario.problemasParaDormir = createUserDto.problemasParaDormir;
    cuestionario.estado = createUserDto.estado;
    const savedCuestionario = await this.cuestionariosRepository.save(
      cuestionario,
    );

    const contacto = new Contacto();
    contacto.nombre = createUserDto.nombre;
    contacto.correo = createUserDto.correo;
    contacto.telefono = createUserDto.telefono;
    contacto.fechaCreacion = new Date();
    contacto.visto = false;
    contacto.cuestionario = savedCuestionario;

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
