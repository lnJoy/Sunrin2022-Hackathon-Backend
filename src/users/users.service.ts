import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityCondition } from 'src/utils/types/entity-condition.type';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(createProfileDto: CreateUserDto) {
    return this.usersRepository.save(
      this.usersRepository.create(createProfileDto),
    );
  }

  findOne(fields: EntityCondition<User>) {
    return this.usersRepository.findOne({
      where: fields,
    });
  }

  update(uid: string, updateProfileDto: UpdateUserDto) {
    return this.usersRepository.save(
      this.usersRepository.create({
        uid,
        ...updateProfileDto,
      }),
    );
  }
}
