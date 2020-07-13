import { Controller, Get, Post, HttpCode, Param, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @HttpCode(204)
  async create(@Body() createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `user id: ${params.id}`;
  }

  // @Get()
  // async findAll(): Promise<User[]> {
  //   return this.usersService.findAll();
  // }
}
