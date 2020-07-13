import { Injectable } from '@nestjs/common';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const userToSave = new User();
    userToSave.username = createUserDto.username;
    const encryptedPassword = await bcrypt.hash(createUserDto.password, 10);
    userToSave.password = encryptedPassword;
    this.usersRepository.save(userToSave);
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne(username);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
}
