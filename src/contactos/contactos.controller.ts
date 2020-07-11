import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { ContactosService } from './contactos.service';
import { CreateContactoDto } from './dto/create-contacto.dto';
import { Contacto } from './contactos.entity';

@Controller('contactos')
export class ContactosController {
  constructor(private contactosService: ContactosService) {}

  @Post()
  create(@Body() createContactoDto: CreateContactoDto): Promise<Contacto> {
    return this.contactosService.create(createContactoDto);
  }

  @Get()
  findAll(): Promise<Contacto[]> {
    return this.contactosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Contacto> {
    return this.contactosService.findOne(id);
  }

  @Get('seen/:id')
  async seen(@Param('id') id: string): Promise<string> {
    await this.contactosService.seen(id);
    return 'Updated';
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.contactosService.remove(id);
  }
}
