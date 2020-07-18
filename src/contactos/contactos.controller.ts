import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ContactosService } from './contactos.service';
import { CreateContactoDto } from './dto/create-contacto.dto';
import { Contacto } from './contactos.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('contactos')
export class ContactosController {
  constructor(private contactosService: ContactosService) {}

  @Post()
  create(@Body() createContactoDto: CreateContactoDto): Promise<Contacto> {
    return this.contactosService.create(createContactoDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(): Promise<Contacto[]> {
    return this.contactosService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Contacto> {
    return this.contactosService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('seen/:id')
  async seen(@Param('id') id: string): Promise<string> {
    await this.contactosService.seen(id);
    return 'Updated';
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.contactosService.remove(id);
  }
}
